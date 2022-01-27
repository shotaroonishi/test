"use strict";

//Matter.js モジュール 初期設定
var Engine = Matter.Engine,
    //物理シュミレーションおよびレンダリングを管理するコントローラーとなるメソッド
World = Matter.World,
    //物理演算領域の作成・操作するメソッドを含む
Body = Matter.Body,
    //剛体のモデルを作成・操作するメソッドを含む
Bodies = Matter.Bodies,
    //一般的な剛体モデルを作成するメソッドを含む
Constraint = Matter.Constraint,
    //制約を作成・操作するメソッドを含む
Composites = Matter.Composites,
    Common = Matter.Common,
    Vertices = Matter.Vertices,
    //頂点のセットを作成・操作するメソッドを含む
MouseConstraint = Matter.MouseConstraint; //マウスの制約を作成するためのメソッドが含む

var width = window.innerWidth * 2; //windowの幅

var height = window.innerHeight; // console.log(width);
// console.log(height);
// Matter.jsのEngineを作成

var container = document.getElementById("canvas-container");
var container_w = container.clientWidth;
var container_h = container.clientHeight;
console.log(container_w);
console.log(container_h);
var engine = Engine.create(container, {
  render: {
    //レンダリングの設定
    options: {
      wireframes: false,
      //ワイヤーフレームモードをoff
      width: container_w,
      //canvasのwidth(横幅)
      height: container_h,
      //canvasのheight(高さ)
      background: "rgba(0, 0, 0, 0)"
    }
  }
}); // マウス操作を追加

var mouseConstraint = MouseConstraint.create(engine);
World.add(engine.world, mouseConstraint); //床を作る

World.add(engine.world, [Bodies.rectangle(0, container_h, container_w * 2, 2, {
  isStatic: true,
  //固定する
  render: {
    fillStyle: "#fff",
    // 塗りつぶす色: CSSの記述法で指定
    strokeStyle: "rgba(0, 0, 0, 0)",
    // 線の色: CSSの記述法で指定
    lineWidth: 0
  }
})]);
World.add(engine.world, [Bodies.rectangle(0, 0, 2, container_h * 2, {
  isStatic: true,
  //固定する
  render: {
    fillStyle: "#fff",
    // 塗りつぶす色: CSSの記述法で指定
    strokeStyle: "rgba(0, 0, 0, 0)",
    // 線の色: CSSの記述法で指定
    lineWidth: 0
  }
})]);
World.add(engine.world, [Bodies.rectangle(container_w, 0, 2, container_h * 2, {
  isStatic: true,
  //固定する
  render: {
    fillStyle: "#fff",
    // 塗りつぶす色: CSSの記述法で指定
    strokeStyle: "rgba(0, 0, 0, 0)",
    // 線の色: CSSの記述法で指定
    lineWidth: 0
  }
})]);

var getRandomParameter = function getRandomParameter(max, min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var arrayX = [];
var arrayY = [];
var length = 14; // 配列長

var widthHalf = container_w / 2;

for (var i = 0; i < length; i++) {
  // 値が０から１までの
  arrayX.push(Math.floor(Math.random() * (widthHalf + 1 - 0)) + 0);
}

for (var _i = 0; _i < length; _i++) {
  // 値が０から１までの
  arrayY.push(Math.floor(Math.random() * (-1000 + 1 - -500)) + -500);
} // console.log(arrayX);
// console.log(arrayY);


var x = getRandomParameter(container_w, 0);
var y = getRandomParameter(-1000, -500);
World.add(engine.world, [Bodies.circle(arrayX[0], arrayY[0], 111, {
  //ボールを追加
  // density: 0.0005, // 密度: 単位面積あたりの質量
  // frictionAir: 0.06, // 空気抵抗(空気摩擦)
  restitution: 0.4,
  // 弾力性
  // friction: 0.01, // 本体の摩擦
  render: {
    //ボールのレンダリングの設定
    sprite: {
      //スプライトの設定
      texture: "./img/img02.png" //スプライトに使うテクスチャ画像を指定

    }
  } // timeScale: 1.5, //時間の倍率を設定(1で1倍速)

}), Bodies.circle(arrayX[1], arrayY[1], 71, {
  //ボールを追加
  // density: 0.0005, // 密度: 単位面積あたりの質量
  // frictionAir: 0.06, // 空気抵抗(空気摩擦)
  // restitution: 1, // 弾力性
  // friction: 0.01, // 本体の摩擦
  restitution: 0.4,
  // 弾力性
  render: {
    //ボールのレンダリングの設定
    sprite: {
      //スプライトの設定
      texture: "./img/img05.png" //スプライトに使うテクスチャ画像を指定

    }
  } // timeScale: 1.5, //時間の倍率を設定(1で1倍速)

}), Bodies.rectangle(arrayX[13], arrayY[13], 342, 52, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img01.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[2], arrayY[2], 212, 212, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img03.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[3], arrayY[3], 161, 161, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img06.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[4], arrayY[4], 245, 257, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img07.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[5], arrayY[5], 122, 122, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img08.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[6], arrayY[6], 130, 113, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img09.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[7], arrayY[7], 228, 114, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img10.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[8], arrayY[8], 121, 82, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img11.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[9], arrayY[9], 92, 92, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img12.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[10], arrayY[10], 110, 63, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img13.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[11], arrayY[11], 72, 59, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img14.png" //スプライトに使うテクスチャ画像を指定

    }
  }
}), Bodies.rectangle(arrayX[12], arrayY[12], 234, 156, {
  //長方形を追加する
  restitution: 0.4,
  // 弾力性
  render: {
    sprite: {
      //スプライトの設定
      texture: "./img/img04.png" //スプライトに使うテクスチャ画像を指定

    }
  }
})]); // 物理シュミレーションを実行

Engine.run(engine);