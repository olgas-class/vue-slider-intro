const { createApp } = Vue;

createApp({
  data() {
    return {
      movie: {
        images: [
          "https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg",
          "https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg",
          "https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg",
          "https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg",
          "https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg",
        ],
        title: "The Mandalorian",
        category: "Action",
        length: "120",
      },
      activeIndex: 0,
    };
  },
  created() {
    console.log("L'APP è CREATA");
  },
  methods: {
    showNext: function() {
        if(this.activeIndex === this.movie.images.length - 1) {
            this.activeIndex = 0;
        } else {
            this.activeIndex++;
        }
    },
     showPrev: function() {
        if(this.activeIndex === 0) {
            this.activeIndex = this.movie.images.length - 1;
        } else {
            this.activeIndex--;
        }
     }
  },
}).mount("#app");
