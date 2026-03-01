const scenario = {
  Train: {
    lines: [
      "プロローグ",
      "目覚まし時計の音で起き、無機質なスーツに身を包んでいつもの通勤電車に乗り込む。窓に映る自分の顔は、今日もどこかピンボケしているように見える。",
      "(今日も始まるのか...)",
      "今日も働いている広告代理店がある「青山一丁目」に向かいながら、SNSを開く。",
      "毎日自分の日常をSNSに書き込んでは、周りからの反応を心待ちにしているが今日もいいねは0だ。",
      "会社でも誰の記憶にも残らない平凡な仕事ぶりなのに加えて、SNSの世界でも周りから存在を認識されることがない。",
      "（僕がいなくなっても、この電車も、会社も、世界も。何一つ変わらないんだろうな）",
      "吊り革を掴む自分の手が、心なしか透けて見えた気がした。",
      "そんなことを思いながら無情にも流れてくるのは見知らぬ誰かの輝かしい日常と、それに対する無数の「いいね」だけ。",
      "受け入れ難い現実から目を背けるようにそっと目を閉じる。 ガタン、ゴトンという単調な振動が、子守唄のように意識を遠のかせていく。",
    ],
    san: 0,
    choices: [],
    next: "Glitch",
  },
  Glitch: {
    lines: [
      ".........どれくらい、眠っていただろうか。",
      "突如、肌を刺すような静寂が訪れた。 電車の騒音も、他人の衣擦れも、スマホの操作音も、すべてが消えた。",
      "「……次は、赫山一丁目……赫山一丁目……」",
      "聞いたことのない、おぞましい響きの駅名。",
      "跳ねるように目を開けると、車内には誰もいなかった。 あんなに密集していた乗客たちが、煙のように消え失せている。",
      "窓の外は、どろりとした赤黒い闇に包まれ、吊り革だけが、生き物のようにゆっくりと揺れていた。",
      "プシューッ……。",
      "力なくドアが開く。 そこは、あなたの「日常」が完全に崩壊した場所。 赫山一丁目駅のホームだった。",
    ],
    san: 0,
    choices: [],
    next: "Stage1",
  },
  Stage1: {
    lines: [
      "ステージ1：赫山一丁目駅",
      "あなたはホームに降り立つ。",
      "見覚えがある。柱の位置、天井の高さ、広告の並び――",
      "タイルのひび割れ一つまで、毎朝見ている青山一丁目の光景そのものだ。",
      "だが、決定的な違和感が全身を支配する。 広告ポスターの文字はインクが溶け出したように滲み、電光掲示板に時刻は表示されていない。",
      "足音も、話し声も、聞こえない。",
      "空気が重い。音が、吸い込まれているようだ。",
      "「すみません……誰かいませんか？」",
      "声を出すが、虚空に消える。 改札のガラスに、自分の姿が映る。",
      "――その背後。 一瞬だけ、あなたを嘲笑うような「誰かの影」が映った気がした。",
      "(...気のせいか？さてここからどうしようか...)",
    ],
    choices: [
      {
        label: "駅構内を調べる",
        san: -10,
        lines: [
          "現実感を求めて、一番近くにある柱を指でなぞる。 「……冷たい」 指先から熱を奪われるような冷気。",
          "だが、どこか新品すぎるのだ。 長年使われているはずの駅なのに、表面には傷一つない。",
          "ふと、広告ポスターに目を向ける。 ビールのジョッキを掲げるモデルの女性。",
          "その「目」が、一瞬だけこちらを見た気がした。 視線を逸らしても、背中に粘りつくような視線が消えない。",
          "胸の奥が、激しくざわつき始めた。",
          "SAN値が10減った。",
        ],
        next: "Stage2",
      },
      {
        label: "改札へ向かう",
        san: -20,
        lines: [
          "ここにいてはいけない。あなたは出口を求めて、改札へと続く階段に向かった。",
          "段差を踏みしめ、一歩、また一歩と上を目指す。",
          "おかしい。",
          "あ...ありのまま今起こった事を話すぜ！『俺は階段を登っていたと思ったらいつの間にか降りていた』",
          "不可解な現象を心の中で解説しながら、どうにか正気を保っている",
          "この道はダメそうだ",
          "SAN値が20減った",
        ],
        next: "Stage2",
      },
      {
        label: "電車に戻ろうとする",
        san: -30,
        lines: [
          "恐怖から逃れるように、あなたは今降りたばかりの車両へと全力で駆け寄った。",
          "その瞬間、 バンッ！！",
          "金属音とともに、凶器のような勢いで扉が閉まった。",
          "わずか数センチ。あと少し遅ければ、指が挟まれ、無残に切断されていただろう。",
          "息を切らし、窓越しに車内を覗き込む。",
          "……そこは、完全な闇だった。 座席も、吊り革も、何もない。ただ底知れない虚無が広がっている。",
          "生存の拠り所を失い、あなたの正気は大きく削り取られた。",
          "SAN値が30減った",
        ],
        next: "Stage2",
      },
    ],
  },
  Stage2: {
    lines: [
      "ステージ2：孤立するタイムライン",
      "静寂が支配するホームで、震える手でスマホを取り出す。",
      "「……警察、いや110番だ」",
      "しかし、発信ボタンを押しても無機質な電子音が響くだけ。メールもLINEも、送信エラーの赤いマークが虚しく並ぶ。",
      "だが、奇妙なことにSNSだけは生きていた。タイムラインには、さっきまでいた「現実」がそのまま流れている。",
      "だが――誰一人として、「赫山一丁目」という異常事態に触れている者はいない。",
      "世界から自分だけが消しゴムで消されたような孤独感が襲う。",
      "「……写真を、アップしてみよう」",
      "この異常な風景を投稿すれば、誰かが気づいてくれるかもしれない。",
      "あなたはカメラを起動し、ノイズの走る駅名標にレンズを向けた。",
      "さて、どんな投稿をしようかな……",
    ],
    choices: [
      {
        label: "現実っぽく説明する",
        san: -10,
        lines: [
          "「知らない駅に降ろされた。赫山一丁目。人もいないし、電車も戻れない。これ、どういう状況？」",
          "努めて冷静に事実を綴ると、数秒後に画面が震える。",
          "『それ、どこの路線？』『新しい駅？』",
          "並ぶのは、スマホの向こう側にいる人々の「他人事」な言葉。その温度差が、心をじわりと凍らせた。",
          "SAN値が10減った。",
        ],
        next: "Stage3",
      },
      {
        label: "ネタ・冗談として投稿する",
        san: -5,
        lines: [
          "「寝過ごしたら異世界駅来たw 青山じゃなくて赫山一丁目？ 演出凝りすぎだろ #赫山一丁目」",
          "恐怖を紛らわせるように、あえておどけた風を装った。",
          "『草』『バズり狙い乙ｗ』",
          "画面の中で「いいね」が増えていく。偽りの繋がりだが、それが今の自分を現世に繋ぎ止める唯一の錨だった。",
          "SAN値が5減った。",
        ],
        next: "Stage3",
      },
      {
        label: "感情的に助けを求める",
        san: -20,
        lines: [
          "「誰か助けて。本当におかしい。誰もいない。帰れない。誰でもいいから助けて！」",
          "魂を削り出すように打ち込んだ悲鳴。返ってきた通知は、たった一件だった。",
          "『……それ、どこ？』",
          "プロフィールも写真もない名もなきアカウント。その文字は、あなたの手首を掴んで暗い底へ引きずり込もうとするような重さを持っていた。",
          "SAN値が20減った。",
        ],
        next: "Stage3",
      },
    ],
  },
  Stage3: {
    lines: [
      "ステージ3：女性との遭遇",
      "静まり返ったホームに、硬いヒールがコンクリートを叩く音が響き渡る。",
      {
        text: "現れたのは、落ち着いたベージュのジャケットを着た、ごく普通の会社員に見える女性。",
        img: "img-woman.png",
      },
      "だが、天井の蛍光灯に照らされているはずの彼女の足元には、一切の「影」がない。",
      "反射的にスマホのレンズを向けても、画面の中には無人のホームが映るだけ。彼女の姿だけが、霧のように消えてしまうのだ。",
      "「……あなたも、バズれなかったのね」",
      "彼女は力なく、自嘲気味に笑った。",
      "「ここはね、ネットの海に捨てられた『忘れられた情報の墓場』。誰かに見られていないと、存在すら許されない場所……」",
      "「SNSが使えるのは、それがこの世界の唯一の生存条件だから。……見られなくなれば、あなたも『なかったこと』にされるわよ」",
      "狂気じみた言葉。だが、この駅の異常さがその言葉に不気味な説得力を与えていた。",
      "(この女、一体何者なんだ……？)",
    ],
    choices: [
      {
        label: "話を信じて聞く",
        san: -10,
        lines: [
          "（よくはわからないが、とにかく『対話』ができる相手に会えた……）",
          "極限状態の中、恐怖よりも「独りではない」という安堵感がわずかに勝ってしまう。",
          "だが彼女の瞳の奥の虚無に触れた瞬間、この異界の論理を受け入れ始めた自分に気づき、背筋が凍る。",
          "SAN値が10減った。",
        ],
        next: "Stage4",
      },
      {
        label: "距離を取って警戒する",
        san: -15,
        lines: [
          "「……近づかないでくれ」",
          "一歩大きく身を引く。影がなく画面にも映らない存在を人間として扱うことなど、理性パ許さなかった。",
          "「そう、あなたも私を拒絶するのね」彼女は追ってこようとはせず、ただ悲しげに首をかしげた。",
          "耐えがたいほどの沈黙。死ぬほど不気味なはずなのに、この気まずさと精神的疲労がじわじわと心を削っていく。",
          "SAN値が15減った。",
        ],
        next: "Stage4",
      },
      {
        label: "彼女を無視して進む",
        san: -25,
        lines: [
          "「まやかしだ……全部、幻覚なんだ！」",
          "彼女の言葉を遮り、階段へ走り出す。しかし角を曲がった先にあったのは、またしても「今いたはずのホーム」だった。",
          "「どこに行っても無駄よ」いつの間にか背後に立っていた彼女が囁く。逃避という選択肢が完全に潰された。",
          "ループする動画のように物理法則が崩壊した世界。一生ここから出られないという焦燥が、心に激痛を与える。",
          "SAN値が25減った。",
        ],
        next: "Stage4",
      },
    ],
  },
  Stage4: {
    place: ["bg-Stage4"],
    lines: [
      "ステージ4：#赫山一丁目",
      "あなたは彼女に導かれるように、薄暗い連絡通路へと足を踏み入れた。",
      "そこは、ホーム以上に「異常」が煮詰まった空間だった。壁にはピンク色の「♡」や青い「リツイート」のアイコンが、まるでどろりとした血痕のようにこびりついている。",
      "「ねえ、知ってる？ バズったものって、どんなに醜くても消えないんだよ」",
      "彼女が指差した掲示板には、かつて人々が消費して捨てた「炎上動画」の残骸が、ノイズまみれで永遠にループ再生されていた。",
      "ふと掲示板の隅に、今あなたの目の前にいる女性……ではない、異形の怪物が映り込んだ投稿を見つける。",
      "そこには禍々しい筆致で、こうタグ付けされていた――『#赫山一丁目』",
      "「……これ、君のことなのか？」あなたが問うと、彼女は消え入りそうな声で笑った。",
      "「注目されない存在は、存在すら許されないのよ。」",
      "彼女の輪郭が、電波干渉のように一瞬激しくブレた。理解しがたい現実が、脳を内側から掻き乱す。",
      "(この場所の正体、そして彼女の末路……。SAN値が10減った。)",
    ],
    san: -10,
    choices: [],
    next: "Stage5",
  },
  Stage5: {
    place: ["bg-Stage5"],
    lines: [
      "最終ステージ：The choice is yours",
      "照明が狂ったように明滅し、前を歩いていた彼女が首をギチギチと回転させて振り向く。",
      "「……私、まだ『見られてる』……？」",
      {
        text: "彼女の肉体は文字の破片となって崩れ落ち、代わりに現れたのは数多の液晶画面を繋ぎ合わせたような歪な巨躯――承認怪異《バズミア》。",
        img: "img-monster.png",
      },
      "「もっと……私を……拡散して！！」駅全体が激震し、スマホから数万件の通知音が鼓膜を突き破る。",
      "ノイズ混じりの巨大な手があなたの胸ぐらを掴み上げ、宙に吊るした。「さぁ今すぐ拡散しろ！ しなければ握りつぶす！」",
      "朦朧とする意識の中、スマホを見ると過去の投稿が爆発的にバズっていた。『10,000 RT』『25,000 いいね』",
      "『これガチのやつ？』『場所特定した』『誰か凸しろよｗｗ』 画面を埋め尽くすコメントの奔流。",
      "この状況でもう一度投稿すれば、さらなる熱狂を巻き起こせる。",
      "だが、直感が告げる。今ここで「向こう側」が求める情報を差し出せば、もう二度と現実には帰れない。",
      "しかし、現実帰ったところで待っているのは、またあの透明な人生だ。",
      "「何をしている！ さっさと投稿をしろ！！」いいねやコメントがつくたび、バズミアの指に力がこもり、あなたの骨が軋む。",
      "やるしかない。あなたは震える指で、最期の「送信」ボタンへと手を伸ばした。",
      "（……どんな形で、この存在を世界へ放つ？）",
    ],
    choices: [
      {
        label: "事実として報告する",
        san: -10,
        lines: [
          "「赫山一丁目という駅に迷い込んだ。不気味な造形物がある。それだけだ」感情を殺し、ただの「事実」を打ち込んだ。",
          "盛り上がりにかける投稿",
          "『なんか冷めた』『急に冷笑系じゃん』『おもんな』",
          "承認を求めて牙を剥くバズミアに対し、あなたは「関心」という餌を与えなかった。",
          "熱狂を失ったバズミアはみる間にディテールを失い、ただのノイズとなって霧散していく。",
          "「……あ、そっか。私は……つまらない存在に、戻るのね……」",
        ],
        next: "ending",
      },
      {
        label: "都市伝説として煽る",
        san: -40,
        lines: [
          "「見たら消える駅がある。怪物がいる。拡散してくれ、呪いが伝染する前に！」恐怖を煽り、センセーショナルな嘘を混ぜて投稿した。",
          "スマホが熱を帯びる。爆発的な拡散。",
          "しかし広まるにつれ、情報は『新手の広告だ』『CGだ』とバラバラに書き換えられていく。",
          "偶像としての純度を失ったバズミアは存在自体が分断されて、自ら崩壊を始めた。「ねえ！ みんな見てるけど……私は、誰なの……！？」",
          "精神を削る絶叫が響き、世界が歪む――。",
        ],
        next: "ending",
      },
      {
        label: "怪談として脚色して投稿する",
        san: -100,
        lines: [
          "「忘れられた駅に悲しい女が立っている。一度目が合えば、あなたも彼女の一部になる」",
          "魂を削り、人々の記憶に一生こびりつくような「完璧な怪談」として彼女を描写した。",
          "バズミアは歓喜に震え、神々しいまでの存在感を持って固定される。「……ありがとう。忘れられない話にしてくれて」",
          "彼女の力が増幅し、駅全体が真っ赤な血のような色に染まり始める。",
          "現実との境界が消滅し、あなたの意識は底なしの承認の沼へと沈んでいった――。",
        ],
        next: "ending",
      },
    ],
  },
  lostEnding: {
    lines: [
      "「……ダメだ」",
      "指が震え、意図した言葉が打てない。恐怖に飲み込まれたあなたの投稿は、皮肉にもこの世界が最も好む「絶望のエンターテインメント」へと書き換えられていく。",
      "バズミアの力は、あなたの正気を吸い上げ、天を突くほどに膨れ上がった。",
      "彼女は歪な歓喜に震えながら、あなたを優しく抱きしめる。",
      "「あなた、いい投稿をするじゃない……。私はずっと、あなたのような承認欲求の飢えに乾き切った人を待っていたのよ」",
      "彼女に促されるまま、スマホの画面に目を落とす。そこでは、かつて一度も経験したことのない、社会現象並みのバズりが起きていた。",
      "『うおおおこれやば！』『特定班、動きます』『AIにしてはガチすぎない？？』『もっと見せて』『次はどうなるの？』",
      "流れていく無数のコメント。自分という存在が、初めて世界に「認識」されている。一度も満たされることのなかった空虚な心が、甘い毒液で満たされていく。",
      "バズミアの腕が肉体に食い込み、精神がノイズの中に溶け出していくが、今はそれすらも心地よい。",
      "（ああ……そうだ。僕は、これが欲しかったんだ……）",
      "「透明」だった自分はもういない。今や、自分こそがこの熱狂の中心なのだ。",
      "意識が完全にバズミアとリンクし、個体としての自分は消滅した。最後に浮かんだのは、歪んだ満足感。",
      "「あぁ……俺は、バズったんだ」",
      "赫山一丁目のホームに、また一つ新しい広告が貼り出される。微笑むあなたの顔。けれど、その瞳に光はない。",
      "------------------",
      "この世界は今日も待ち続ける。次に、自己承認欲求に飢えた, 孤独な誰かが迷い込んでくるのを。",
    ],
  },
  aliveEnding: {
    lines: [
      "「……あ、あ……っ！」",
      "あなたの投稿が引き金となり、バズミアの巨体がノイズを撒き散らしながら内側から弾け飛ぶ。それと呼応するように、赫山一丁目駅全体が断末魔のような軋み声を上げ、激しい揺れと共に崩壊を始めた。",
      "タイルが剥がれ、虚無の闇へと落下していく。ふと見ると、崩れゆく通路の先に、一箇所だけ白く輝く「改札」が見えた。",
      "「帰らなきゃ……元の世界に！」",
      "あなたは肺が焼けるような痛みも構わず、無我夢中になって走った。光り輝く改札機を飛び越え、その先の眩い奔流に身を投じる。",
      "「……次は……山……丁目……青山一丁目……」",
      "聞き慣れた、平坦で事務的なアナウンス。ハッと目を開けると、そこはベンチの上だった。いつもの、少し騒がしくて冷たい「青山一丁目」の光景。",
      "「夢……だったのか？」",
      "体には、あのアスファルトの冷たさも、バズミアに掴まれた手の痛みも残っていない。だが、過剰な承認欲求は自己を蝕み、そこから生まれた行く当てのない憎悪が、あの異界を作り出していたことだけは、確信を持って理解できた。",
      "ポケットの中のスマホが、狂ったように通知を刻んでいる。「遅刻だぞ。何時だと思っているんだ！」「おい、月次の資料はどうした！」",
      "上司の市似さんからの鬼電と、無数の督促メッセージ。あなたは現実の重圧に溜息をつき、膝の震えを抑えて駅を飛び出し、会社へと走り出す。",
      "一瞬、SNSのおすすめ通知が目に入ったが、今はそんなことを気にしている余裕はない。",
      "-------------",
      "【本日のバズ投稿！】",
      "「なんか目が覚めたらよく分かんない駅にいるんだけどwww……」",
      "「……ここから出して」",
      "#赫山一丁目",
    ],
  },
};

const getTitleButton = document.querySelector(".start_game");
const getTitle = document.querySelector(".title");
const getGame = document.querySelector(".game");
const getSections = document.querySelectorAll("section");
const getOverlay = document.querySelector("#overLay");
const currentSanDisplay = document.querySelector("#currentSan");
const currentStageDisplay = document.querySelector("#currentStage");
const mainImage = document.querySelector("#mainImage");

getTitle.addEventListener("click", () => {
  getOverlay.classList.add("is_black");
  setTimeout(() => {
    getGame.classList.remove("not_active");
    getTitle.classList.add("not_active");
    getGame.classList.add("active");
    getOverlay.classList.remove("is_black");
  }, 600);
});

function blackOut() {
  getOverlay.classList.add("is_black");
  setTimeout(() => {
    changeBg();
    getOverlay.classList.remove("is_black");
  }, 600);
}

function changeBg() {
  mainImage.classList.remove();
  mainImage.classList = "bg-" + currentStageId;
  console.log(mainImage.classList);
}

let currentStageId = "Stage5";
let currentSan = 100;
let mode = "story";
let lineIndex = 0;
let currentChoice = null;
const displayText = document.createElement("p");

function currentSanChange() {
  currentSanDisplay.textContent = currentSan;
}

function currentStageChange() {
  currentStageDisplay.textContent = currentStageId;
}

function resetDisplay() {
  const textForm = getTextForm();
  textForm.innerHTML = "";
}

function getCurrentStage() {
  return scenario[currentStageId];
}

function getLinesArray() {
  const currentStage = getCurrentStage();
  return currentStage.lines;
}

function getTextForm() {
  return document.getElementById("textForm");
}

function getCharaImage() {
  const charaImage = document.querySelector(".character");
  return charaImage;
}

function advanceText() {
  currentStageChange();
  const textForm = getTextForm();
  const currentStage = getCurrentStage();
  const linesArray = getLinesArray();
  const chara = getCharaImage();
  const linesArrayDate = linesArray[lineIndex];
  if (lineIndex < linesArray.length) {
    if (typeof linesArrayDate === "object") {
      displayText.textContent = linesArrayDate.text;
      textForm.appendChild(displayText);
      if (linesArrayDate.img) {
        chara.classList.remove("char-appear");
        void chara.offsetWidth;
        chara.src = linesArrayDate.img;
        chara.classList.add("char-appear");
      }
    } else {
      displayText.textContent = linesArrayDate;
      textForm.appendChild(displayText);
    }
    lineIndex++;
  } else if (lineIndex === linesArray.length) {
    if (currentStage.choices.length === 0) {
      lineIndex = 0;
      currentStageId = currentStage.next;
      currentSan += currentStage.san;
      currentSanChange();
      advanceText();
      blackOut();
    } else {
      lineIndex = 0;
      displayText.textContent = "";
      mode = "choice";
      showChoices();
    }
  }
}

function getChoices() {
  const currentStage = getCurrentStage();
  return currentStage["choices"];
}

function applyChoices(choice) {
  currentChoice = choice;
  lineIndex = 0;
  mode = "choiceResult";
  choiceResult();
}

function showChoices() {
  const textForm = getTextForm();
  const choices = getChoices();
  textForm.innerHTML = "";
  choices.forEach((choice) => {
    const displayButton = document.createElement("button");
    displayButton.textContent = choice.label;
    textForm.appendChild(displayButton);
    displayButton.addEventListener("click", (e) => {
      e.stopPropagation();
      applyChoices(choice);
    });
  });
}

function choiceResult() {
  const textForm = getTextForm();
  textForm.innerHTML = "";
  if (lineIndex < currentChoice.lines.length) {
    displayText.textContent = currentChoice.lines[lineIndex];
    textForm.appendChild(displayText);
    lineIndex++;
  } else if (lineIndex === currentChoice.lines.length) {
    currentSan += currentChoice.san;
    currentSanChange();
    lineIndex = 0;
    if (currentChoice.next === "ending") {
      checkSan();
    } else {
      blackOut();
      currentStageId = currentChoice.next;
    }
    mode = "story";
  }
}

function checkSan() {
  const chara = getCharaImage();
  if (currentSan <= 0) {
    currentStageId = "lostEnding";
    blackOut();
    chara.classList.add("hidden");
    mode = "story";
  } else {
    currentStageId = "aliveEnding";
    blackOut();
    chara.classList.add("hidden");
    mode = "story";
  }
}

getTextForm().addEventListener("click", () => {
  if (mode === "story") {
    advanceText();
  } else if (mode === "choice") {
    showChoices();
  } else if (mode === "choiceResult") {
    choiceResult();
  }
});
