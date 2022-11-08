const version="1.2";self.addEventListener("install",e=>e.waitUntil(caches.open("static-v"+version).then(e=>e.addAll(["manifest.json","assets/images/favicon.png","assets/images/logo.png","assets/images/gift-for-you/banner-logo.svg","assets/images/gift-for-you/video-thumb.jpg","assets/images/help-center/banner-logo.png","assets/images/help-center/img.png","assets/images/shared/banner-bg.jpg","assets/images/shared/whatsapp.png","assets/images/telemedicine/about.png","assets/images/telemedicine/banner-logo.png","assets/images/telemedicine/specialties/allergist.png","assets/images/telemedicine/specialties/cardiologist.png","assets/images/telemedicine/specialties/dermatologist.png","assets/images/telemedicine/specialties/gynecologist.png","assets/images/telemedicine/specialties/neurosurgeon.png","assets/images/telemedicine/specialties/oncologist.png","assets/images/telemedicine/specialties/opthalmologist.png","assets/images/telemedicine/specialties/orthopedist.png","assets/images/telemedicine/specialties/otolaryngologist.png","assets/images/telemedicine/specialties/pathologist.png","assets/images/telemedicine/specialties/pediatrician.png","assets/images/telemedicine/specialties/podiatrist.png","assets/images/telemedicine/specialties/psychiatrist.png","assets/images/telemedicine/specialties/surgeon.png","assets/images/telepsychology/about.png","assets/images/telepsychology/banner-logo.png","assets/fonts/flaticon.eot","assets/fonts/flaticon.svg","assets/fonts/flaticon.ttf","assets/fonts/flaticon.woff","assets/fonts/flaticon.woff2","assets/css/remixicon.ttf","assets/css/remixicon.woff","assets/css/remixicon.woff2"])))),self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>0!==e.indexOf("static-v"+version)).map(e=>caches.delete(e)))))),self.addEventListener("fetch",s=>s.respondWith(caches.match(s.request).then(e=>e||fetch(s.request))));