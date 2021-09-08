<template>
    <div class="app" >
    <div class="parent-container">

    <div class="header">
    <img src="https://res.cloudinary.com/mindset/image/upload/v1630359624/logo_mhpqef.png" alt="" class="img-fluid">
       <button class="register-btn">Register</button>
    
    </div>
    <div class="login-container">
    <div class="left">
      <h1 class="welcome">Welcome.</h1>
         <p class="login-text">login to your account</p>
         <form action="" class="form-container">
           <input type="text" placeholder="Your Username"> 
           <input type="text" placeholder="Password" style="margin-top: 22px;">
           <div class="btn">
             <button class="one">Forgot password?</button>
             <button disabled="disabled" class="two">
               login
           </button>
           </div>
         </form>
    </div>
    <div class="right">
    <img src="https://res.cloudinary.com/mindset/image/upload/v1630359018/undraw_exams_g4ow_1_f426ng.png" alt="" class="illustration">
    </div>
    </div>
    </div>
    </div>
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

*{
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
}

.app{
    background-color: #f5f5f5;
    height: 100vh;
    overflow-y: hidden;
    min-height: 100vh;
}
.parent-container{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100% ;
    height: auto;
    background-color: #f5f5f5;
}
.register-btn{
    
    background: transparent;
    border: 1px solid #12D35F;
    box-sizing: border-box;
    border-radius: 10px;
    width: 127px;
    height: 36px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #12D35F;
    padding: 7px 25px;
}
.header{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    width: 80%;
    margin: auto;
    margin-top: 2rem;
    align-items: center;
}
.login-container{
    display: grid;
    width: 80%;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 3rem;


}
.illustration{
    width: 100%;
    height: auto;
}


  .left h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #12D35F;
    margin-bottom: 10px;
  }
  .left p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #2E282A;
    margin-bottom: 51px;

  }
  .form-container{
    display: flex;
    flex-direction: column;
  }
    input{
        background: #FFFFFF;
        box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        width: 90%;
        height: 55px;
        border-color: #FFFFFF;
        border: none;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: #D3D3D3;
  }
  input::placeholder{
  padding-left: 1rem;
  }
  .btn{
  display: flex;
  align-items: center;
  }

</style>
