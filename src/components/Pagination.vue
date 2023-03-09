<template>
    <div class="pagination">
      <button
        class="pagination-button"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        v-for="page in pages"
        :key="page"
        class="pagination-button"
        :class="{ 'pagination-button--active': page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button
        class="pagination-button"
        :disabled="currentPage === pageCount"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
      perPage: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        currentPage: 1,
      };
    },
    computed: {
      pageCount() {
        return Math.ceil(this.data.length / this.perPage);
      },
      pages() {
        const pagesArray = [];
        for (let i = 1; i <= this.pageCount; i++) {
          pagesArray.push(i);
        }
        return pagesArray;
      },
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.pageCount) {
          this.currentPage = page;
          this.$emit("pagination-change-page", this.currentPage);
        }
      },
    },
  };
  </script>
  
  <style>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .pagination-button {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 12px;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  
  .pagination-button--active {
    background-color: #ddd;
  }
  
  .pagination-button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
  </style>
  