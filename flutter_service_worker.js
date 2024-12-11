'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "236d818b6fee2f22619889aeb1758ead",
"version.json": "b920809dfc48e311f3d5429ae346bc48",
"index.html": "c06689e20374650e46b19cae9bb19650",
"/": "c06689e20374650e46b19cae9bb19650",
"main.dart.js": "cab1770723766cd17a0b12ca4e0f88e8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3de9abb08e2a33cbbef90235149f95e3",
".git/config": "45cb87b0366f9e964fe7f3d66a90cc9c",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/deea8c26a1c65d7c3e15162e2c86e8fcf2f8a6": "8297d53d8a1c98b5b5d99d3912792a41",
".git/objects/32/28498d79c42447c9695ff68443046cb15ecff2": "4cf07e345d72f8208f915abda20cdf5d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/a3e8901af26b0cbb177d4a0d686857ec31ef14": "a7ecc40d53ca4feae2cabbd82ff7589e",
".git/objects/0b/6990239949d32969b38b30e3da315bc4e7f144": "82b8b06832057502e0db48ee0f032a52",
".git/objects/60/6b72200ce4ab9d4210e9d85955cb53d80c7375": "d619fa9222b39fdbc98e372f85d91f84",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "0af928db60aec68f64fdc9cdc7917502",
".git/objects/5a/30aaf88076ced290189afcee4c100887be21e5": "659dcd6e249d322bd5ab6b3790d6d781",
".git/objects/b2/0eb025562d1f7116c34d2eab28be5eaf521638": "c401952bfa7eb81458086ee4041f76b8",
".git/objects/b2/1cd1f9299d5dca61ce6ea966026e81e0a5d1b5": "7a323c4b8b8430b0c810a411e87c82a8",
".git/objects/d9/9bbfa2a5f2ff6df2cbc314f0e4760c316c6157": "f8d6f5591212f533b3ab6953a42c0f04",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/38c2bb5897a0a09d2fb68f3b474676b5274f1a": "4ead7560b113491284c0a3b39f0c0716",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/615bc8f02e8006789c70f85d929525b329b3db": "de7e55f994c67eac1a6e0bae3f9af6f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/0bba843e6e91e7d62d9e52d05911db0cc12125": "96cd2420357a603841636e6fc8cf25c4",
".git/objects/ed/ba0add4dbdb8d7292ca498b391afb8c4afb205": "73206a9a0afacd2abb03d8d00fff28e9",
".git/objects/c6/1d36054056bfd0c8f545d22ef24481af799a0f": "03fe7fd448b61c140c7a55b779427d7d",
".git/objects/20/47a65b0308e24a42c3641ce0388002f0ef8d57": "d20588eae6372a4010033903ef343ed4",
".git/objects/18/0124280cde460ee9ece002dd84af90c8d2866c": "cb7d4eee6b86fe77d426b8073a681a0f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/4b4b4daca39f92843957e3116d119384560afa": "12531e4484da9cb6e59044f6e63428ac",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/de9cb63f8d89071647f071fc563c300bffeabf": "8ed4dbb184a269f7321c87c592785f7a",
".git/objects/5c/6f72804c6a74ec26178dc03b528e5c9b59cd9e": "2af631bd3695435953a9446d06b5cb99",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/4c7f228085126359294e7c235e48f170c35ef9": "fa7a67f9115ef34eafc9d65f62187ee4",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/6d2ac2bf5f19e1167cf8e8965ba2acf30d325d": "12480017ecb00c69c0ebd78e85e513d1",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/3bc2df9423593dca2a2bb17ce7d0182fe042b6": "8d911aa0861392681418ac7d3ece3016",
".git/objects/d5/7c54c0718376617331a139f257508d1f989520": "d3bf3d7f903b7353bae188e4cfe68b01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/79c7b934f32cbaf5978f7f0a65512c07218034": "b4061e3d7f617457eef710eff007c97b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/1fa9643207b1a0192edce8db9c533214e5bff2": "ff43542e7c95c710a3e50217527f3b77",
".git/objects/f0/1b083c85a253318411f04795f8683b83fe6cc7": "0264b82bdd49faffe13112059ade9bf3",
".git/objects/f0/6bf34518597d471ce8962776213d02615395c4": "16ada72dbf7d35039cded383de47106f",
".git/objects/fa/16dfb0df3f1a8c58e7b74fd52f9e48c080b8cd": "0dd8de873daec1e26605bf5243781ab5",
".git/objects/fa/d850d3a26f52901c021bbae1c5094cc2ba3b14": "9f54a10537c0773d0366747b49bfc8dc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/de4b3d8fef1a2e677957e798c3477ec7946e27": "fc3e69bf349393fa718794e48477ceb2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/b9317b4aad58664e77888e63b6fd7cbcd0309d": "538a7b871230483e936eed516f872530",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/c7a981a1dcea060ccb4b03f26de5ea5e06b4be": "016c97419e6eeff9468c344c84729b29",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/345df1425340dd9e37f6dd1229f18c08725e17": "f2b9640714f3d1d66e0eff70dde71e88",
".git/objects/13/91a8dd0f116a5413dd18a734ebd447636a14ac": "a82cbd70ebd364bce2a8921db9de536e",
".git/objects/7f/ccb3cfd7c10f3838a9241fcdeeb58cce5b3c01": "914d2dadfd01a1e292825802a664ea81",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "edacf42cbcb54227219730da4426bbb1",
".git/logs/refs/heads/main": "edacf42cbcb54227219730da4426bbb1",
".git/logs/refs/remotes/origin/main": "1bf0d36bb5a52cd701c3e8519333a980",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6d28b5c3994355514ac9a497bd9cbca8",
".git/refs/remotes/origin/main": "6d28b5c3994355514ac9a497bd9cbca8",
".git/index": "9e9f613d1edf476f6adfba253459bc41",
".git/COMMIT_EDITMSG": "3a588927664007d74c8e24fa88b7986f",
"assets/AssetManifest.json": "a3665b3c08c7369baf019ba3f827a057",
"assets/NOTICES": "4115186f8a50ddbff6de00e020395568",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ce19a7d0c4384f9bd0ea9770575d265c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "57c11bf8a5e711486d1ecf516b2cd601",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/finwithpav.gif": "137a0ef3c542179242de26bcf1357f62",
"assets/assets/nowthisisbg.png": "3a685540e57903984f2d362042c9631f",
"assets/assets/optimbg.gif": "3542d8489b8cae36d072b31ecfe493f4",
"assets/assets/dashrun.png": "338616edb46a19a2ec6f9157f30d565f",
"assets/assets/dino.png": "9df8e4bed5a3d916f229159f4afff223",
"assets/assets/vadapav.png": "c6be1657c4cee0056ccfb5c8c69b5100",
"assets/assets/background.jpg": "d0aab6add939577760eb239c1f63c0df",
"assets/assets/bg.gif": "97707252a1b01878b2f1fe710eb2407c",
"assets/assets/cloud.png": "addbb0b34d0c9c6efbaca5fb785b58a6",
"assets/assets/ground.png": "2052a7a716e6eebd4604605adf32f9a4",
"assets/assets/obstacle.png": "a810107d8f81f255c97c5dc2b56e19c6",
"assets/assets/d.png": "2a07881d10159318182098cca9515472",
"assets/assets/reactobstacle.png": "d81aa0bd7d70c089aed8e2abb5720a5f",
"assets/assets/thefin.gif": "d353bc97e27bb157470fe9cbde1a9f51",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
