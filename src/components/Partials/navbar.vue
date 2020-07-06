<template>
  <header>
    <section class="container main-div px-0">
      <nav class="navbar  justify-content-between navbar-expand-lg navbar-light">
        <a class="navbar-brand a-text flex" href="index.html">

        <!-- First nav here -->
          <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#">
                About
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#">Stories</a>
            </li>
          </ul>
          <!-- First ends here -->
        </a>
        <!-- toggler is here -->
        <button
          class="navbar-toggler"
          style="color: lemonchiffon !important;"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- toggler ends here -->

        <!-- Middle Nav sits here -->
  <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Centered nav only <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

        </ul>
  </div>
    <!-- Middle Nav ends here -->

  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          
<!-- last nav sits here -->
          <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#">
                About
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#">Stories</a>
            </li>
          </ul>
          <!-- last nav ends here -->
        </div>
      </nav>
    </section>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
header {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}

.nav-item {
  font-family: 'Poppins', sans-serif;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  font-style: normal;
}
.navbar .navbar-collapse {
  text-align: center;
}
</style>
>
