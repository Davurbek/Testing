 new Vue({
     el:'#app',
     data() {
         return {
             message:'salom davrbek',
             senn:false,
             sal:'salomlar',
             count:10,
             list:[],
             x:0,
             y:0,
             title:'https://www.youtube.com/watch?v=m1WawdCckMY',
             teaches:['DAVRBEK','ISFANDIYOR','SARDOR','AZIZ']
         }
     },
     methods: {
         changeTitle: function () {
             return this.message='hayrli tong';
         },
        
         Change: function () {
             this.count++;
         },
         ChangeCordination: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
         }
     },

   
 })


new Vue({
    el:"#app1",
    data() {
        return {
            title:"Assalomu alaykum hammaga hayrli tong",
            seen:false,
            count:20,
            array:[]
        }
    },
    methods: {
        changetitle(){
            this.title="assalomu alaykum"
        },
        Showtitle(){
            this.seen=true
        },
        Incriment(){
            this.count+=5;
        },
        ChangeApp2(){
            vm1.message="Hello New vue js "
        }
    },
   
});
let vm1 = new Vue({
    el:"#app2",
    data() {
        return {
            message:'Hello Vue js !'
        }
    }
   
});
 let vm2 = new Vue({
    el:"#app3",
    data() {
        return {
            title:'',
            boys:['aziz','sardor','hamidullo']
        }
    },
    methods: {
        Savetitle: function () {
            this.boys.push(this.title);
            this.title='';
        }
    },
});

Vue.component('product',{
    template:`
    <div class="product">
    <div class="product-image">
        <img :src="image" alt="">
    </div>
    <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <ul>
            <li v-for = "detail in details">{{detail}}</li>
        </ul>
        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
        :style="{backgroundColor:variant.variantColor}" @mouseover="updateProduct(index)">
           
        </div>
        <button @click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}">Add to Cart</button>
        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
            brand:'Vue Mastery',
           selectedVariant:0,
            product:'Socks',
            details:["80% cotton","20% polyester","Gender-neutral"],
            variants:[
                {
                    variantId:2234,
                    variantColor:"green",
                    variantImage:'./image/bluesocks.jpg',
                    variantQuantity:10
                },
                {
                    variantId:2235,
                    variantColor:"blue",
                    variantImage:'./image/bluesocks1.jpg',
                    variantQuantity:0
                },
            ], 
            cart:0
        }
        
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        updateProduct: function (index) {
            this.selectedVariant = index
        }
    },
   computed: {
       title()
       {
           return this.brand + ' ' + this.product
       },
       image(){
         return this.variants[this.selectedVariant].variantImage  
       },
       inStock(){
           return this.variants[this.selectedVariant].variantQuantity
       }
   },
})
let app = new Vue({
   
})
app.$mount('#app4');
let app1 = new Vue({
el:'#app5',
    data() {
        return {
            // seen:false,
            color:'black',
            width:120,
            fontSize:'12px'
        }
    },
    // computed: {
    //     divClass: function () {
    //         return{
    //             demoColor1:this.seen,
    //             demoColor2:!this.seen
    //         }
    //     }
    // },
    computed: {
        myStyle:function () {
            return{
                backgroundColor: this.color,
                width : this.width + 'px'
            };
        }
    },
})
var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        console.log(val)
        this.fullName = this.firstName + ' ' + val
      }
    },
   
  })
  var app2 = new Vue({
      el:'#app6',
      data() {
          return {
              name:'',
              email:null,
              parol:null,
              login:null,
              picked:'',
              firstName: 'Davronbek',
              lastName: 'Rahmonov'
          }
      },
      computed:{
          fullName : function(){
              return this.firstName + ' ' + this.lastName;
          }, 
          isNameEntered: function(){
              return this.name !== '' && this.name.length >0;
          }
      },
      methods: {
        Bosh:function() {
           var a= this.name
           var b= this.email
           var c= this.parol
           var d= this.login
                if(!a)
                alert('Ismingizni kiriting')
                else if(!b)
                alert('Emailni kiriting')
                else if(!c)
                alert('Parolni kiriting')
                else if(!d)
                alert('Loginni kiriting')
        },
        getFullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
      },
  })
//   Yangi dars
// let data = {name:'Sardor'}
let cmp ={
    template:`
    <p>{{name}} (<button @click="ChangeName">Change</button>)</p>
    `,
    data() {
        // return data;
        return {
          Status:'Davrbek', 
          name:'Davrbek',
          lastName:'Toyliboyev',
        }
    },
    methods: {
        ChangeName:function () {
            this.name='Hojiakbar'
        }
    },
    computed: {
        FullName:function () {
            return this.lastName + ' ' + this.name
        }
    },

}
let vm3 = new Vue({
    el:'#app7',
    components:{
        'my-form':cmp
    }
})
let vm4 = new Vue({
    el:'#app8'
})
