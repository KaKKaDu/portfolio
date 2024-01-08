## Portfolio
So the name of this project tells everything you need to know: that's extemporized Angular 17 app, which 
main goal is to refresh my Angular knowledge, use some new version features, and tell to the user a little about 
myself as a front-end developer.
### Exact things
What I learned/practised while working on this:
+ Modularity: 
  - that's the first project, where I attempted to keep the structure as readable and convenient as possible.
+ @-syntax:
  - the new really cool feature of 17th Angular, which makes my life easier as a developer, and also improves performance.
  Live examples of **@switch** and **@for** from the app:
  ```angular17html
    @switch(carouselSlide){
        @case(1) {
        <div class="img-cont img-1-cont">
            <img src="../../../../../../assets/works_assets/ecologic-assets/eco-screen-1.png" alt="eco-1-image">
        </div>
        }
        @case(2) {
        <div class="img-cont img-2-cont">
            <img src="../../../../../../assets/works_assets/ecologic-assets/eco-screen-2.png" alt="eco-2-image">
        </div>
        }
        @case(3) {
        <div class="img-cont img-3-cont">
            <img src="../../../../../../assets/works_assets/ecologic-assets/eco-screen-3.png" alt="eco-3-image">
        </div>
        }
    }
  ```

  ```angular17html
    @for(comment of comments; track comment) {
      <div class="comment col-8 offset-2">
          <div class="comment-head">
          <h4>{{comment.username}}</h4>
          </div>
          <div class="comment-content">
              <pre>{{comment.content}}</pre>
          </div>
      </div>
    } @empty {
      <div></div>
    }
  
    
  ```

+ Lazy-loading:
  - not a new feature, and I also used it before, but I practised it a lot, and it also affects the structure, so it's worth to mention.
+ Standalone components:
  - also a feature I've never used before, but it was really useful in certain parts of this project, so that was my first acquaintance with that.
+ Tag 'pre':
  - yes, that's not really smth connected to Angular, but this tag really helped me to solve the problem of comment formatting. 
