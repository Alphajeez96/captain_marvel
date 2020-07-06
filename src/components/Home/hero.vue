<template>
  <div>
    <!-- Hero here -->
    <section class="hero" id="home">
      <div class="container text-light">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-sm-12">
          <h3>Carol danvers</h3>
            <h1 class="hero-text">
              <strong>
              captain marvel
              </strong>
            </h1>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12"></div>
        </div>
        <div class="btn-div">
          <button class="btn mt-3 px-4 pt-2 pb-2">Book Us Now</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
    height: 65vh;
    background: url("../../assets/captain3.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    bottom: 34px;
 
}

.hero-text {
    padding-top: 100px;
    font-family: 'Roboto';
    font-weight: 100;
    font-style: normal;
    font-size: 40px;
    line-height: 50px;
    text-transform: uppercase
}
h3{
    text-transform: uppercase;
}
</style>>
