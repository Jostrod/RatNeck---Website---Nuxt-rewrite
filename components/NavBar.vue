

<template>

    <nav class="navbar">
        <div class="social-media-icons">
            <a href="https://www.facebook.com/profile.php?id=61583388094995" class="facebook" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>

            <a href="https://www.instagram.com/r4tneck/" class="instagram" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>

        </div>

        <NuxtLink to="/" class="logo-link">
            <img src="/RnLogo.svg" class="logo-svg" alt="Band-logo" />
        </NuxtLink>

        <div class="social-media-icons-right">
            <a href="https://open.spotify.com/artist/5pn78EEA585S3bGHqvTGev?si=7AKUdH5vTBOXVzsnMEAVfg" class="spotify" target="_blank">
            <font-awesome-icon :icon="['fab', 'spotify']" /> 
            </a>

            <a href="https://www.youtube.com/@Ratneck_official" class="youtube" target="_blank">
            <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
        </div>

        <ul class="nav-links">
            <li><NuxtLink to="/About">About</NuxtLink></li>
            <li><NuxtLink to="/Store">Store</NuxtLink></li>
            <li><NuxtLink to="/Contact">Contact</NuxtLink></li>
        </ul>
    </nav>
</template>



<style scoped>

  
.navbar {
  width: 100%;
  background: linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
  
}


.logo-svg {
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;   
  transition: filter 0.3s ease, transform 0.3s ease;
  display: block;
  transform-origin: center;
}

.logo-svg:hover{
  filter: drop-shadow(0 5px 5px rgba(255, 255, 255, 0.1));
  transform: translateY(-2px);
  cursor: pointer;
}

.nav-links {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content:space-around;
}

.nav-links a:hover{
  color: rgb(209, 76, 150);
  background-color: rgb(29, 29, 29);
  transition: 0.5s;
}

.nav-links a {
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 7px 14px;
  box-sizing: border-box; 
}


.nav-links a::after {
  content: "";
  position: absolute;
  inset: 0; 
  border: 2px solid transparent;
  transition: border-color 0.25s ease, clip-path 0.25s ease;
  clip-path: polygon(50% 100%, 50% 100%, 50% 100%, 50% 100%);
}


.nav-links a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 0%;
  border: 2px solid transparent;
  border-bottom: none; 
  transition: all 0.25s ease 0.12s;
}

.nav-links a:hover::after {
  border-color: rgb(209, 76, 150);
  clip-path: polygon(
    0% 0%,   100% 0%, 
    100% 100%, 0% 100%
  );
}

.social-media-icons {
  position: relative;
  top: 12px;
  left: 12px;
  z-index: 10;
  display: flex;
  gap: 0.06rem;
  align-items:center;
}

.social-media-icons-right {
  position: relative;
  top: 12px;
  z-index: 10;
  display: flex;
  gap: 0.06rem;
  align-items:center;
}

.social-media-icons a {
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  text-decoration: none; 
  color: white;
  font-size: 2rem;
  padding: 4px;
  line-height: 1;   
}

.social-media-icons-right a {
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  text-decoration: none; 
  color: white;
  font-size: 2rem;
  padding: 4px;
  line-height: 1;   
}


.social-media-icons a.facebook:hover {
  color: rgb(24,119,242);
  box-shadow: 2px 2px 5px rgba(203, 198, 218, 0.3);
  border-radius: 10px;

}

.social-media-icons a.instagram:hover {
  filter: drop-shadow(0 0 6px rgba(221, 42, 123, 0.6));
  color: #dd2a7b;
  box-shadow: 2px 2px 5px rgba(203, 198, 218, 0.3);
  border-radius: 10px;
}

.social-media-icons-right a.spotify:hover {
  color: rgb(29, 185, 84);
  box-shadow: 2px 2px 5px rgba(203, 198, 218, 0.3);
  border-radius: 10px;
}

.social-media-icons a.instagram {
  font-size: 2.3rem;
}

.social-media-icons-right a.youtube:hover {
  color: rgb(200,0,0);
  box-shadow: 2px 2px 5px rgba(203, 198, 218, 0.3);
  border-radius: 10px;
}

.logo-link {
  display: inline-block;

}

</style>