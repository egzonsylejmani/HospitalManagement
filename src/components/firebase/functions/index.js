const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

const adminEmails = ['egzon@admin.com'];

exports.addUserRole = functions.auth.user().onCreate(async (user) => {
    async function setUserClaims(userClaims) {
        await admin.auth().setCustomUserClaims(user.uid, userClaims);

        db.collection('roles').doc(user.uid).set({
            email: user.email,
            role: userClaims
        });
    } 

    try {
        if (adminEmails.includes(user.email)) {
            await setUserClaims({ admin: true });
        } else if (user.email.endsWith('@doctor.com')) {
            await setUserClaims({ doctor: true, receptionist: true });
        } else if (user.email.endsWith('@receptionist.com')) {
            await setUserClaims({ receptionist: true });
        }
    } catch (err) {
        console.log(err);
    }
});
