<template>
  <div>
    <!---Navbar---->
    <nav class="navbar navabr-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand order-md-last">STUDENTS MANAGEMENT</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">REGISTER </router-link>

          </li>
        </ul>
         <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/list-students">LIST</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!---End Navbar---->
    <div class="contaier mt-5">
      <router-view/>
    </div>
  </div>
</template>
