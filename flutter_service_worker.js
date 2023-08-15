'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "82f55f65b5e1f49c004cdacc656079c2",
"version.json": "7a0379ad665aea3e80412e73cb1044c5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"index1.html": "10e005e07b9e8e5e9325a14ff8d816a1",
"index.html": "4426fd0318e91939759f5ce3ce6c2598",
"/": "4426fd0318e91939759f5ce3ce6c2598",
"resize.js": "a3426701154cfe1465d99be29301ac91",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "4d2329b6a199c9c8d5e192a1cafac38a",
"assets/NOTICES": "c126bac395ad68def6e515738116ff0b",
"assets/FontManifest.json": "d9f5ed664070fa04520446be0b982f99",
"assets/packages/judolib/assets/flags-ioc/BAN.png": "670b502c019fcb54b9ec0c1cd3ad4d3a",
"assets/packages/judolib/assets/flags-ioc/CHN.png": "4e272b4cf298ccd70ed4b031b4560e98",
"assets/packages/judolib/assets/flags-ioc/SOM.png": "f65e9ae4d1aa4cbc2e0a9156a47e2530",
"assets/packages/judolib/assets/flags-ioc/ALG.png": "4a2dccfee87a4da04b6e928e2bac719d",
"assets/packages/judolib/assets/flags-ioc/POL.png": "ea7249bef8962b3de04c4674fd7954f2",
"assets/packages/judolib/assets/flags-ioc/ESP.png": "5e740d8836117ab2fce6a58c50cc4d28",
"assets/packages/judolib/assets/flags-ioc/PRK.png": "e9d673f97e197d9c42fd0403bec4aed8",
"assets/packages/judolib/assets/flags-ioc/ECU.png": "f69046eca24fe0bd41c581464b85898d",
"assets/packages/judolib/assets/flags-ioc/COL.png": "bccd85ed59629d2e61c386389095ce8c",
"assets/packages/judolib/assets/flags-ioc/INA.png": "505e532dd64c72b29fa48195414442c5",
"assets/packages/judolib/assets/flags-ioc/USA.png": "6ad18dbae71d3b7649ddfa9f27a28283",
"assets/packages/judolib/assets/flags-ioc/MEX.png": "4d5e74dcf17f1e06cd1ce69286feec98",
"assets/packages/judolib/assets/flags-ioc/CAN.png": "b1d5f9c7b4178054191d5c4ce8630e00",
"assets/packages/judolib/assets/flags-ioc/UZB.png": "7d116a9edae011931f56bc713e727c77",
"assets/packages/judolib/assets/flags-ioc/TUN.png": "820b78ce790861c9f1dd817fdb2235c1",
"assets/packages/judolib/assets/flags-ioc/NIG.png": "f47e0e2a3cdb5db03dceee116ca9c3a6",
"assets/packages/judolib/assets/flags-ioc/MLI.png": "29664b034905b3659aeecedfbd5c1e96",
"assets/packages/judolib/assets/flags-ioc/AHO.png": "d1f67b87930afc8b911176f7b72705d5",
"assets/packages/judolib/assets/flags-ioc/URU.png": "5843614d014ef9a4d3cdf5c77b72ece6",
"assets/packages/judolib/assets/flags-ioc/TUR.png": "de20bc702edcd6383d23d7451a8e3c6d",
"assets/packages/judolib/assets/flags-ioc/BLR.png": "bf0118d2585f6336c855a01171e1ebe2",
"assets/packages/judolib/assets/flags-ioc/BAR.png": "b84a6722c391c05ffa5152f10b348950",
"assets/packages/judolib/assets/flags-ioc/CIV.png": "057940737b49609a1bf210b878d0f857",
"assets/packages/judolib/assets/flags-ioc/BRA.png": "96462178178ede1e9cc35debd11e2c9e",
"assets/packages/judolib/assets/flags-ioc/MAC.png": "7b09ff7ff593054670f259dadeb9c49e",
"assets/packages/judolib/assets/flags-ioc/SIN.png": "f02215702e74a439b6e6955078a6e0dd",
"assets/packages/judolib/assets/flags-ioc/KAZ.png": "5fc16e95249b3569b15141d254748779",
"assets/packages/judolib/assets/flags-ioc/BEL.png": "4cee9f9c192e2bd8f719f13b0bf84aa3",
"assets/packages/judolib/assets/flags-ioc/ITA.png": "a8748d92458732d41c4df7c590afccab",
"assets/packages/judolib/assets/flags-ioc/RUS.png": "a90a141b60d0008619c79799c60be98d",
"assets/packages/judolib/assets/flags-ioc/ISL.png": "73534c765721af9039d473cabf2e29b9",
"assets/packages/judolib/assets/flags-ioc/ROM.png": "028293c418a23226fca23520d8429103",
"assets/packages/judolib/assets/flags-ioc/AUT.png": "21e2e4c8fcfd810a30698f37095c6f3a",
"assets/packages/judolib/assets/flags-ioc/CYP.png": "a7d39a083e9b473e02ba9bb7e9568503",
"assets/packages/judolib/assets/flags-ioc/AZE.png": "59c71b3abe1e0bd56ab4b3c20e349964",
"assets/packages/judolib/assets/flags-ioc/TJK.png": "69774d987c2726ca814c32a8eca4bd29",
"assets/packages/judolib/assets/flags-ioc/GEO.png": "7e62afef89c485120b637395c4cf2573",
"assets/packages/judolib/assets/flags-ioc/HKG.png": "67b221278d731228a63f4083c24840d6",
"assets/packages/judolib/assets/flags-ioc/COD.png": "2463b0ef0b7dfc7a14a5459234e8d7e3",
"assets/packages/judolib/assets/flags-ioc/SLO.png": "655f1e1af75634fcd30f5977cc1e0ca4",
"assets/packages/judolib/assets/flags-ioc/NCA.png": "cd415f37f4110937f0669b118f408769",
"assets/packages/judolib/assets/flags-ioc/DOM.png": "c2d5f191a8a8db9383a00262724c1aeb",
"assets/packages/judolib/assets/flags-ioc/EGY.png": "f31b72a64aecb0c870a4954dda9bf9a7",
"assets/packages/judolib/assets/flags-ioc/MGL.png": "21188d0c367752472fda959cfd0ed588",
"assets/packages/judolib/assets/flags-ioc/BRN.png": "3baa337e5bcc27a73ee67dead5cb757c",
"assets/packages/judolib/assets/flags-ioc/SUI.png": "bdc6896a269db8f210135bf49ec8d79a",
"assets/packages/judolib/assets/flags-ioc/EST.png": "c05312933bc6a2dd27ab68b85e0d2b65",
"assets/packages/judolib/assets/flags-ioc/BOT.png": "63d6e8933007af08c18c24f4d0eeb699",
"assets/packages/judolib/assets/flags-ioc/GUA.png": "1618d022aa4fd23bb89cc3d830d3505d",
"assets/packages/judolib/assets/flags-ioc/MLT.png": "0401a4e7cf3cedc39cda8fefc2e53b60",
"assets/packages/judolib/assets/flags-ioc/AFG.png": "6b4a1c8062263e356b220484e15e3f88",
"assets/packages/judolib/assets/flags-ioc/NGR.png": "30ba1c0d9254b628433126ca9a735b9b",
"assets/packages/judolib/assets/flags-ioc/TKM.png": "e6c3e3c289ca54741505649b8fbd565a",
"assets/packages/judolib/assets/flags-ioc/NED.png": "b0d003abf7b077608ebda4abdc76b105",
"assets/packages/judolib/assets/flags-ioc/CAM.png": "4a43ec8a2300ead09af57c9d7bcd4438",
"assets/packages/judolib/assets/flags-ioc/MAR.png": "e09e44e8396532dadeda662e390b8c02",
"assets/packages/judolib/assets/flags-ioc/IRL.png": "ba31e76822a97562e5c7456d3e68da75",
"assets/packages/judolib/assets/flags-ioc/MON.png": "a45b1accbd1730469c3c0abdcbc49dad",
"assets/packages/judolib/assets/flags-ioc/KOR.png": "032c541f0382eefc6c9ec3a14a357358",
"assets/packages/judolib/assets/flags-ioc/GBR.png": "6695a24851166911d4dc5d935a479300",
"assets/packages/judolib/assets/flags-ioc/CRC.png": "3c78d41b51c66d6b0a105e28bc9014f4",
"assets/packages/judolib/assets/flags-ioc/JOR.png": "a7e718943c73fa245137ee7a1572bd54",
"assets/packages/judolib/assets/flags-ioc/CZE.png": "d2676bbc067da4c17d15daf3bb70e62f",
"assets/packages/judolib/assets/flags-ioc/LTU.png": "cf67b1ea4e6cc081cecca023f9603498",
"assets/packages/judolib/assets/flags-ioc/FRA.png": "2c128e895dc3457a484fc109120d363f",
"assets/packages/judolib/assets/flags-ioc/KSA.png": "700959cdf619175bdb082f14ca64e454",
"assets/packages/judolib/assets/flags-ioc/CHI.png": "795a09607777caaa963a8ed2abd6b996",
"assets/packages/judolib/assets/flags-ioc/KUW.png": "aa08d338f53cfe0c76a09f39d9cc8e3f",
"assets/packages/judolib/assets/flags-ioc/GER.png": "031d3179eddc1b8b8d004b440bd04220",
"assets/packages/judolib/assets/flags-ioc/DEN.png": "ebcdcfc8a8f69a1de80c7f7cf365f222",
"assets/packages/judolib/assets/flags-ioc/LUX.png": "918eeaea1e43f6128e5bca4ece7332f5",
"assets/packages/judolib/assets/flags-ioc/IRI.png": "c387b19a1e265277fd9279ef15542fea",
"assets/packages/judolib/assets/flags-ioc/SVK.png": "1e7243f2e0ae7d1ecb2e115b8d6fa256",
"assets/packages/judolib/assets/flags-ioc/CGO.png": "5ba1b54c97f5cd7bd6234e66cf11d4ac",
"assets/packages/judolib/assets/flags-ioc/IRQ.png": "04c89d1648ba650137aba39540167bfc",
"assets/packages/judolib/assets/flags-ioc/KGZ.png": "acf34dce733fc6a06f52b67e3ac4891a",
"assets/packages/judolib/assets/flags-ioc/NZL.png": "901f28528c1800007b19b0c9d4a91c4b",
"assets/packages/judolib/assets/flags-ioc/AUS.png": "7ef97cfce6121aa6f876a321a92e24c2",
"assets/packages/judolib/assets/flags-ioc/NOR.png": "fbd597fdd761d37e0e8262c9da6a64d9",
"assets/packages/judolib/assets/flags-ioc/FIN.png": "298ea06c460e82de8a9ab4bfa79645c3",
"assets/packages/judolib/assets/flags-ioc/JPN.png": "b19ca6dcf2379b3514f67672b72132d6",
"assets/packages/judolib/assets/flags-ioc/PER.png": "fd67cb9af98b64c941dabb77c4a298e8",
"assets/packages/judolib/assets/flags-ioc/SYR.png": "5044b3fdab63d3188cfd76f6589844c0",
"assets/packages/judolib/assets/flags-ioc/CRO.png": "18b2d970953a01804b16d21b58110e4e",
"assets/packages/judolib/assets/flags-ioc/MTN.png": "727b608d06b042fbd570b9802b739aff",
"assets/packages/judolib/assets/flags-ioc/IND.png": "6d998512d3befbd3c2e69d4ee1feea36",
"assets/packages/judolib/assets/flags-ioc/TPE.png": "2d204241afec2040609cc2a258bd079c",
"assets/packages/judolib/assets/flags-ioc/HUN.png": "93e266050baa1fab783bc6228f80d57b",
"assets/packages/judolib/assets/flags-ioc/BOL.png": "b07f3af7e18b3fb6595ac860f55f03f5",
"assets/packages/judolib/assets/flags-ioc/GRE.png": "81d80ede0f351288976df57cac632769",
"assets/packages/judolib/assets/flags-ioc/MYA.png": "3f4f8faca165dca27f0eda831f0bde7d",
"assets/packages/judolib/assets/flags-ioc/QAT.png": "c1a5738034305ac59deb004b0dc971d2",
"assets/packages/judolib/assets/flags-ioc/BRU.png": "b39e39744fafda9eb70ebd8e927d3fe7",
"assets/packages/judolib/assets/flags-ioc/LAT.png": "a9c3a2f10feea38b0cfab6a551eb8802",
"assets/packages/judolib/assets/flags-ioc/YEM.png": "ee2044661bc25a77ac29989798f855ee",
"assets/packages/judolib/assets/flags-ioc/CUB.png": "c0993349c4febc452ef9489610989fd2",
"assets/packages/judolib/assets/flags-ioc/SWE.png": "ccab73ac1bd6fe046abb71e605ec7c16",
"assets/packages/judolib/assets/flags-ioc/BUL.png": "f62788851c4c84772e348b886b55f781",
"assets/packages/judolib/assets/flags-ioc/ROU.png": "028293c418a23226fca23520d8429103",
"assets/packages/judolib/assets/flags-ioc/SLE.png": "2bbab1f8429438a462fdddfaec6be254",
"assets/packages/judolib/assets/flags-ioc/BUR.png": "1eabdd5f36ae1d84ce36df86f1097cee",
"assets/packages/judolib/assets/flags-ioc/AND.png": "c49803c0213213b50653f774bb1068c1",
"assets/packages/judolib/assets/flags-ioc/GUI.png": "cf219555cd75704ca1c1793ceacc2ec6",
"assets/packages/judolib/assets/flags-ioc/SEN.png": "74617b5d188c2445ccd0ae0ef41876fe",
"assets/packages/judolib/assets/flags-ioc/PAN.png": "36f5aa376c51e668a553a251c94aa8c8",
"assets/packages/judolib/assets/flags-ioc/POR.png": "1164bb54ec094dd978724e2a9df73eac",
"assets/packages/judolib/assets/flags-ioc/UAE.png": "1959872a863b720eebbfe57b46fe0998",
"assets/packages/judolib/assets/flags-ioc/PAR.png": "4de995b850f26aeb350c850509b9685e",
"assets/packages/judolib/assets/flags-ioc/MKD.png": "98314e6551531f09ec27fd4a21590c5a",
"assets/packages/judolib/assets/flags-ioc/MAS.png": "24459cd67f6bf4c03e77a8ee4c782796",
"assets/packages/judolib/assets/flags-ioc/ARU.png": "3a6b1d95c33e2e1986fd27b8cb7d5462",
"assets/packages/judolib/assets/flags-ioc/ARM.png": "2a9fb44df905f6d930727785609e7de4",
"assets/packages/judolib/assets/flags-ioc/RSA.png": "b99cba2649e7b60a0462c88a18633ab8",
"assets/packages/judolib/assets/flags-ioc/LIB.png": "8f50c4f498830fde3a9c4e65b1a4f11d",
"assets/packages/judolib/assets/flags-ioc/VEN.png": "b2fc47585dd337a127fc2cc567c430a1",
"assets/packages/judolib/assets/flags-ioc/HON.png": "9dcf94b9e5f324f1283ce33b28980f39",
"assets/packages/judolib/assets/flags-ioc/NAM.png": "30564e71150168b680adce05f7443475",
"assets/packages/judolib/assets/flags-ioc/ISR.png": "1cde177760f13546dea33e7eb242a109",
"assets/packages/judolib/assets/flags-ioc/FAR.png": "23410c84517d6a4ac4525738a6150c27",
"assets/packages/judolib/assets/flags-ioc/SRB.png": "ce0866a2dcf0114a1c58e1f95d40cdd2",
"assets/packages/judolib/assets/flags-ioc/MDA.png": "1fec164f488a88780f6146a88026127b",
"assets/packages/judolib/assets/flags-ioc/PUR.png": "3c719ad3af2f87bfdc01589f555b3755",
"assets/packages/judolib/assets/flags-ioc/PHI.png": "3187ae63d0ac5a154347ea1ddc5a4eda",
"assets/packages/judolib/assets/flags-ioc/THA.png": "47d5572be78ab0b5353915b74125b34d",
"assets/packages/judolib/assets/flags-ioc/UKR.png": "1371a837d921173b831acc9d49df801c",
"assets/packages/judolib/assets/flags-ioc/VIE.png": "9166288ae66359c744812493826f0224",
"assets/packages/judolib/assets/flags-ioc/SMR.png": "c9ad854984055dd09c440bf07386b192",
"assets/packages/judolib/assets/flags-ioc/ISV.png": "ce54a3f62c9f971db20dcdd31f00e694",
"assets/packages/judolib/assets/flags-ioc/PLE.png": "73a595f973a7ad227c0b85fee4ecd211",
"assets/packages/judolib/assets/flags-ioc/ARG.png": "0da8c96c29bb0c81877aa77e1a090653",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "edb1411527123ab97218aee144ddf07f",
"assets/fonts/RobotoMono-Regular.ttf": "a48ac41620cd818c5020d0f4302489ff",
"assets/fonts/RobotoMono-Bold.ttf": "7c13b04382bb3c4a6a50211300a1b072",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "7e1b67c511d765ca77b1ca6c7a0f0b50",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
