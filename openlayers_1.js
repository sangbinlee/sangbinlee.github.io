import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';

 
// import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});



var roadLayer = new TileLayer({
  source: new BingMaps({
    key: 'AvSRvuJZZuZnoWxbMqwK05EEyBclwJFJL1VVnUoWt1pirHYwUuSS4JcJ3aDTdv7G',
    imagerySet: 'RoadOnDemand',
    maxZoom: 19
  })
});

var aerialLayer = new TileLayer({
  source: new BingMaps({
    key: 'AvSRvuJZZuZnoWxbMqwK05EEyBclwJFJL1VVnUoWt1pirHYwUuSS4JcJ3aDTdv7G',
    imagerySet: 'Aerial',
    maxZoom: 19
  })
});

var view = new View({
  center: [-6655.5402445057125, 6709968.258934638],
  zoom: 13
});

var map1 = new Map({
  target: 'roadMap',
  layers: [roadLayer],
  view: view
});

var map2 = new Map({
  target: 'aerialMap',
  layers: [aerialLayer],
  view: view
});