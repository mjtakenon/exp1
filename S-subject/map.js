// キャンパスの要素を取得する
var canvas = document.getElementById( 'map-canvas' ) ;

// 中心の位置座標を指定する
var latlng = new google.maps.LatLng( 34.7192369,137.7144583 );

// 地図のオプションを設定する
var mapOptions = {
	zoom: 15 ,	// ズーム値
	center: latlng ,	// 中心座標 [latlng]
	map: map,
	position: new google.maps.LatLng( 34.7192369,137.7144583 ) ,	// 位置座標
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map = new google.maps.Map( canvas, mapOptions ) ;

/* [marker]の設定
var marker = new google.maps.Marker( {
	map: map ,	// 地図
	position: new google.maps.LatLng( 34.7192369,137.7144583 )	// 位置座標
} ) ;
*/
