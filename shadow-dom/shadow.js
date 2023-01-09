class CustomerTestimonial extends HTMLElement {
    constructor() {
      // 必须首先调用super方法
      super();
    
      this.attachShadow({mode:'open'})
    
      
      // 不可以使用self.style，因为console.log(self.style) 会返回CSSStyleDeclaration,
      // 它不是node，不能被附加到其他节点中
     
  
      
    }
    connectedCallback(){
        console.log(1);
        let testimonialContent=this.dataset.content;
        let testimonialName=this.dataset.name;
        let testimonialAvatar=this.dataset.avatar;
        let testimonialPosition=this.dataset.position;
      
        this.template = document.createElement('template');
        this.template.innerHTML = `
           <div class="testimonial">
            <div class="testimonial__content">
               ${testimonialContent}
            </div>
            <div class="testimonial__footer">
              <img alt="avatar" src="${testimonialAvatar}" class="testimonial__avatar" width="50" height="50">
              <div>
                <div class="testimonial__name">
                 ${testimonialName}
                </div>
                <div class="testimonial__role">
                  ${testimonialPosition}
                </div>
              </div>
            </div>
          </div>
        `;
        this.styles = document.createElement('style');
       //:host 选中组件根元素
       //all：initial 不继承属性
        this.styles.innerHTML = `
        :host{   
        display:block;
        width:50%;
        font-family:initial;
        }
        :host([orange]) .testimonial{
            background-color: orange;

        }
        :host(:not(.purple)) .testimonial{
            border:5px dashed black
        }
          .testimonial {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0 auto;
            cursor: pointer;
            padding: 4vmin 8vmin;
            border-radius: 20px;
            box-shadow: 0 2px 40px rgba(0 0 0 / 15%);
          }
    
          .testimonial__content {
            font-size: 25px;
            margin-bottom: 45px;
          }
    
          .testimonial__footer {
            display: flex;
            align-items: center;
          }
    
          .testimonial__avatar {
            display: block;
            max-width: 50px;
            max-height: 50px;
            margin-right: 15px;
            border-radius: 999px;
          }
    
          .testimonial__name {
            font-size: 14px;
            font-weight: bold;
          }
    
          .testimonial__role {
            font-size: 14px;
          }    
        `;
        this.shadowRoot.appendChild(this.template.content)
        this.shadowRoot.appendChild(this.styles)
        }
      
  }
  
  // 注册一个自定义标签
  customElements.define('customer-testimonial', CustomerTestimonial);