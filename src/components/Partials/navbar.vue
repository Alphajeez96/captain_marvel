<template>
  <div>
    <header>
      <section class="contain main-div">
        <nav
          class="navbar  navbar-expand-lg navbar-light"
        >
          <a class="navbar-brand a-text flex" href="index.html">
            <!-- First nav here -->
            <ul class="navbar-nav my-2 my-lg-0">
              <li class="border__right"></li>
              <li class="nav-item upper active">
                <a class="nav-link mx-1" href="#">
                  sign in
                  <span class="sr-only"></span>
                </a>
              </li>
              <span class="mini__divider">|</span>

              <li class="nav-item upper active">
                <a class="nav-link mx-1" href="#">join</a>
              </li>
              <li class="border__right"></li>
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
          <div
            class="collapse navbar-collapse mx-5 pl-5 justify-content-md-center"
            id="navbarsExample08"
          >
            <ul class="navbar-nav">
              <li class="">
                <a class="logo" href="/">
                  <img src="../../assets/marvel.png" alt="logo" />
                </a>
              </li>
            </ul>
          </div>
          <!-- Middle Nav ends here -->

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>

            <!-- last nav sits here -->
            <ul class="navbar-nav my-2 my-lg-0">
              <li class="border__right"></li>
              <li class="nav-item upper active">
                <a class="nav-link mx-3" href="#">
                  About1
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item upper active">
                <a class="nav-link mx-3" href="#">
                  About
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="border__right"></li>
              <li class="nav-item upper active">
                <a class="nav-link mx" href="#">Stories</a>
              </li>
              <li class="border__right"></li>
            </ul>
            <!-- last nav ends here -->
          </div>
        </nav>
      </section>
    </header>

    <!-- Under header here -->
    <div class="under__div">
      <hr />
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08"
        >
          <ul class="navbar-nav">
            <li class="nav-item mx-2 active">
              <a class="nav-link" href="#">
                Videos
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">characters</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">comics</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">movies</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">tv shows</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">games</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">news</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">more</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
header {
  width: 100%;
  background: #202020;
  max-height: 50px;
  width: inherit;
}

.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link .navbar .navbar-collapse {
  text-align: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  position: relative;
  bottom: 10px;
  text-transform: uppercase;
}
.mini__divider {
  position: relative;
  bottom: 2px;
}
.border__right {
  border-right: 1px solid rgb(71, 69, 69);
  height: 12vh;
  position: relative;
  bottom: 20px;
}
a img {
  position: relative;
  left: 100px;
  bottom: 30px;
}
hr {
  border-bottom: 1px solid rgb(71, 69, 69);
}
.under__div {
  position: relative;
  bottom: 18px;
}
.bg-dark {
  background: #202020 !important;
  position: relative;
  bottom: 16px;
  max-height: 40px;
  text-transform: uppercase;
}
</style>
