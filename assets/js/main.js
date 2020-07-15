Vue.component('media-button', {
  template: `
<a v-bind:href="href" target="_blank" class="button is-dark is-outlined is-medium is-rounded">
  <span class="icon">
    <i v-bind:class="icon" aria-hidden="true"></i>
  </span>
</a>`,
  props: {
    href: String,
    icon: String
  }
})

Vue.component('skill-card', {
  template: `
<div class="column is-4-desktop">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title is-centered">
        <span class="icon icon-margin">
          <i v-bind:class="icon" v-bind:style="fontSize"></i>
        </span>
        {{ name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="pre-line">{{ desc }}</p>
      </div>
    </div>
  </div>
</div>`,
  props: {
    name: String,
    icon: {
      type: String,
      default: 'fas fa-code'
    },
    desc: String
  },
  data() {
    return {
      fontSize: ''
    }
  },
  created() {
    if (this.icon !== 'fas fa-code') {
      this.fontSize = 'font-size: x-large'
    }
  }
})

Vue.component('work-card', {
  template: `
<div class="column is-6-desktop">
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h4 class="subtitle is-5">
          {{ name }}
          <div class="tag-container">
            <span class="tag" v-for="tag in tags" v-bind:key="tag.id">{{ tag }}</span>
          </div>
        </h4>
        <div class="card-image">
          <img v-bind:src="image">
        </div>
        <p class="pre-line">{{ desc }}</p>
        <a target=”_blank” v-if="href" v-bind:href="href">View on GitHub</a>
      </div>
    </div>
  </div>
</div>`,
  props: {
    name: String,
    tags: Array,
    href: {
      type: String,
      default: ""
    },
    image: String,
    desc: String
  }
})

new Vue({
  el: '#app',
  data: {
    profile: `はじめまして。torinと申します。
        現在、東京農工大学に通っており、2022年卒業予定の学部生です。理系の高校に通っていたため、高校の頃からプログラミングを学んでいます。
        Procedural Generationという分野に興味があり、様々なコンテンツジェネレーターを作っています。`,
    svg: {
      color: [
        { base: '#c7b83c', outline: '#503c18' },
        { base: '#92cfbb', outline: '#3a5345' }
      ],
      index: 0
    },
    medias: [
      { href: 'https://github.com/yurkth', icon: 'fab fa-github' },
      { href: 'https://twitter.com/yurkth', icon: 'fab fa-twitter' },
      { href: 'https://yurkth.hateblo.jp', icon: 'fas fa-blog' }
    ],
    skills: {
      main: [
        {
          name: 'Python',
          icon: 'fab fa-python',
          desc: `高校2年の頃から使っています。
                    簡単な処理はだいたいPythonで書いてます。高校の卒業研究にも使用しました。`
        },
        {
          name: 'C++',
          desc: `大学に入ってから使い始めました。
                    基本的にOpenSiv3Dというフレームワークを使っています。`
        },
        {
          name: 'JavaScript',
          icon: 'fab fa-js-square',
          desc: `このポートフォリオではVue.jsを使用しています。
                    普段はp5.jsで色々作っています。`
        }
      ],
      sub: [
        {
          name: 'C#',
          desc: `高校の頃にUnityを使ってゲームの開発をしていました。
                    最近はOSSの改良などに使っています。`
        },
        {
          name: 'Ruby',
          icon: 'devicons devicons-ruby',
          desc: `使いたいライブラリがRubyにしかなかったときに使いました。`
        },
        {
          name: 'C',
          desc: `高校、大学の授業で使いました。`
        },
        {
          name: 'Java',
          icon: 'fab fa-java',
          desc: `大学の授業で使いました。`
        },
        {
          name: 'HTML',
          icon: 'fab fa-html5',
          desc: `高校、大学の授業で使いました。
                    このポートフォリオの作成にも使っています。`
        },
        {
          name: 'CSS',
          icon: 'fab fa-css3-alt',
          desc: `高校、大学の授業で使いました。
                    このポートフォリオの作成にも使っています`
        },
        {
          name: 'Lua',
          desc: `PICO-8でゲームを作るときに使っています。`
        },
        {
          name: 'R',
          desc: `大学の授業で使いました。`
        },
        {
          name: 'Arduino',
          desc: `高校、大学の授業で使いました。
                    高校の頃に買ったUnoはホコリを被ってます…`
        },
        {
          name: 'Swift',
          icon: 'devicons devicons-swift',
          desc: `高校の頃に趣味で使いました。`
        },
        {
          name: 'Verilog',
          desc: `大学の授業で使いました。`
        }
      ],
      OS: [
        {
          name: 'Windows',
          icon: 'fab fa-windows',
          desc: `デスクトップ、ノートともにWindowsを使っています。
                    ゲームをするのでMacやLinuxには変えられません…`
        },
        {
          name: 'Ubuntu',
          icon: 'fab fa-ubuntu',
          desc: `Windowsで開発をしたくなかったのでWSLからUbuntuを動かしています。`
        },
        {
          name: 'Raspbian',
          icon: 'fab fa-raspberry-pi',
          desc: `最近Raspberry Pi 4を買いました。自動化のスクリプトなんかを動かしています。`
        }
      ]
    },
    works: [
      {
        name: "Sprator",
        tags: ["C++", "OpenSiv3D"],
        href: "https://github.com/yurkth/sprator",
        image: "assets/img/sprator.png",
        desc: `10x10のドット絵のアイコンを生成できるソフトです。
                生成アルゴリズムにはセル・オートマトンを使用しています。`
      },
      {
        name: "stsmapgen (Procedural Map Generator)",
        tags: ["JavaScript", "p5.js"],
        href: "https://github.com/yurkth/stsmapgen",
        image: "assets/img/mapgen.png",
        desc: `Slay the Spireというゲームに出てくるようなマップを生成します。
                Poisson Disk Sampling、Delaunay三角形分割、A*を利用しています。`
      },
      {
        name: "Astraea",
        tags: ["JavaScript", "p5.js", "Python"],
        href: "https://github.com/yurkth/astraea",
        image: "assets/img/astraea.png",
        desc: `ドット絵で描かれた惑星を生成します。
                Astraeaで生成された惑星の画像を共有するTwitterのbotも作りました(@astraea_yk)。`
      },
      {
        name: "BIB",
        tags: ["Lua", "PICO-8"],
        href: "https://github.com/yurkth/bib",
        image: "assets/img/bib.png",
        desc: `SHIBUYA PIXEL ART 2020というコンテストに応募するために作りました。
                Chromeの恐竜のゲームと似ています。`
      },
      {
        name: "Portfolio",
        tags: ["HTML", "CSS", "JavaScript", "Vue.js"],
        href: "https://github.com/yurkth/portfolio",
        image: "assets/img/portfolio.png",
        desc: `このサイトです。Vue.jsとBulmaを使用しています。`
      },
      {
        name: "Remote controller",
        tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Vue.js"],
        href: "https://github.com/yurkth/remote",
        image: "assets/img/remote.png",
        desc: `ラズパイやスマホからPCを操作できます。日付や時間のほか、PCで再生している楽曲の詳細も表示できます。
                フロントエンドにVue.js、バックエンドにFlaskを使っています。CSSフレームワークはBulmaです。`
      },
      {
        name: "discord-notify",
        tags: ["Python"],
        href: "https://github.com/yurkth/discord-notify",
        image: "assets/img/discord-notify.png",
        desc: `学科掲示板の更新内容をDiscordに通知してくれます。
                もともとLINE Notifyを使っていたのですが、DiscordのWebhookでEmbedを使ったほうが見た目がよさそうだったので作り直しました。`
      },
      {
        name: "数独の問題生成プログラム",
        tags: ["Python", "Kivy"],
        image: "assets/img/sudoku.png",
        desc: `高校の卒業研究で作りました。
                難易度を指定した問題の生成や、問題を解かせることができます。ソースコードは公開していません。
                ちなみに数独を解くのは好きですが、あまり得意ではないです。`
      }
    ],
    contact: `ご連絡等ありましたら、yurkth[at]gmail.comまたはTwitterのDMまでお願いします。
                ※[at]は@に置き換えてください。`
  },
  created() {
    this.svg.index = Math.floor(Math.random() * this.svg.color.length)
  }
})
