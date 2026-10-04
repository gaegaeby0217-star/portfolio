/**
 * ============================================================
 *  작업물(작품) 목록 — 여기에 본인의 스파인 작업물을 추가하세요.
 * ============================================================
 *
 * 1) assets/ 폴더 아래에 작업물별로 폴더를 하나씩 만드세요.
 *    예: assets/dragon-boss/dragon.json, dragon.atlas, dragon.png
 *
 * 2) 스파인 에디터에서 Export 할 때:
 *    - Format: Json (텍스트, 용량 크지만 디버깅 쉬움) 또는 Binary(.skel, 용량 작음)
 *    - Atlas 텍스처를 함께 내보내기 (Pack 체크)
 *    - "Nonessential data 포함" 여부는 취향껏 (포함 시 용량 증가)
 *
 * 3) 아래 works 배열에 항목을 하나 추가하세요. 필드 설명:
 *    id          : 고유 식별자 (영문/숫자, 공백 없이)
 *    title       : 카드에 표시될 작업물 이름
 *    role        : 담당 역할 (예: "리깅 & 애니메이션", "이펙트")
 *    tags        : 검색/필터용 태그 배열
 *    description : 작업물 설명 (짧게)
 *    skeleton    : json 또는 skel 파일 경로
 *    atlas       : atlas 파일 경로
 *    animation   : 처음 재생할 애니메이션 이름 (스파인 에디터에서 확인)
 *    skin        : (선택) 기본으로 보여줄 스킨 이름
 *    backgroundColor : 뷰어 배경색 (16진수 RGBA, 예: "#1a1a2eff")
 *    spineVersion : 이 작업물을 내보낸 스파인 에디터 버전 (예: "4.2"). 참고용 표시.
 *    thumbnail   : (선택) 카드에 보여줄 미리보기 이미지 경로. 클릭하기 전에도
 *                  작업물이 뭔지 보이게 해줌. 없으면 기본 플레이스홀더로 표시됨.
 *                  - 정적 이미지: .png/.jpg (스파인 에디터에서 캡처하거나 스크린샷)
 *                  - 움직이는 미리보기: .gif (브라우저에서 자동 재생됨, 별도 코드 불필요)
 *                  - 권장 비율 4:3, 너무 큰 용량은 로딩이 느려지니 1MB 이하 권장
 *
 * 팁: 스파인 버전은 내보낸 json 파일을 열어 최상단
 *     "skeleton": { "spine": "4.2.33", ... } 부분에서 확인할 수 있습니다.
 */

const works = [
 
  {
    id: "hanbock_01",
    title: "한복_가영",
    role: "리깅 & 애니메이션",
    tags: ["LD애니메이션"],
    description: "가영_LD애니메이션",
    skeleton: "assets/hanbock/hanbock_01.json",
    atlas: "assets/hanbock/hanbock_01.atlas",
    animation: "idle",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/hanbock/thumbnail.gif",
  },
{
    id: "hanbock_direct",
    title: "한복_가영_연출",
    role: "리깅 & 애니메이션 & 파티클 & 연출",
    tags: ["연출영상", "이펙트","LD", "애니메이션"],
    description: "유니티로 파티클 제작 후 애프터 이펙트로 연출했습니다.",
    type: "video",
    media: "assets/hanbock_direct/hanbock_direct(1).mp4",
    thumbnail: "assets/hanbock_direct/hanbock_direct_thumbnail.png",
    backgroundColor: "#000000ff",
},


  {
    id: "Girls' frontline_SD",
    title: "소녀전선_SD",
    role: "리깅 & 애니메이션",
    tags: ["SD애니메이션"],
    description: "소녀전선의 HK416의 SD 애니메이션입니다.※원작 아트 리소스를 기반으로 리깅·애니메이션을 직접 제작한 연습작입니다. 원본 아트의 저작권은 각 게임사에 있습니다.",
    skeleton: "assets/Girls' frontline_SD/HK419_SD.json",
    atlas: "assets/Girls' frontline_SD/HK419_SD.atlas",
    animation: "walk",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/Girls' frontline_SD/G_thumbnail_SD.png",
  },
{
    id: "sword_effect",
    title: "소녀전선_SD_이펙트(검)",
    role: "애니메이션 이펙트 유니티 타임라인",
    tags: ["스킬영상", "이펙트","SD", "애니메이션"],
    description: "소녀전선의 HK416의 SD 스파인 애니메이션을 유니티에 넣어 타임라인으로 파티클 이펙트를 작업한 영상입니다. 파티클 이펙트는 에셋스토어에서 구매했습니다..※원작 아트 리소스를 기반으로 리깅·애니메이션을 직접 제작한 연습작입니다. 원본 아트의 저작권은 각 게임사에 있습니다.",
    type: "video",
    media: "assets/Girls' frontline_SD_sword/sword_effect.mp4",
    thumbnail: "assets/Girls' frontline_SD_sword/sword_thumbnail.png",
    backgroundColor: "#000000ff",
},
{
    id: "bow_effect",
    title: "소녀전선_SD_이펙트(활)",
    role: "애니메이션 이펙트 유니티 타임라인",
    tags: ["스킬영상", "이펙트","SD", "애니메이션"],
    description: "소녀전선의 HK416의 SD 스파인 애니메이션을 유니티에 넣어 타임라인으로 파티클 이펙트를 작업한 영상입니다. 파티클 이펙트는 에셋스토어에서 구매했습니다..※원작 아트 리소스를 기반으로 리깅·애니메이션을 직접 제작한 연습작입니다. 원본 아트의 저작권은 각 게임사에 있습니다.",
    type: "video",
    media: "assets/Girls' frontline_SD_bow/bow_effect.mp4",
    thumbnail: "assets/Girls' frontline_SD_bow/bow_thumbnail.png",
    backgroundColor: "#000000ff",
},

{
    id: "Arknights_SD",
    title: "명일방주_SD",
    role: "리깅 & 애니메이션",
    tags: ["SD애니메이션"],
    description: "명일방주의 마터호른의 SD 애니메이션입니다.※원작 아트 리소스를 기반으로 리깅·애니메이션을 직접 제작한 연습작입니다. 원본 아트의 저작권은 각 게임사에 있습니다",
    skeleton: "assets/Arknights_SD/char_199_yak2.json",
    atlas: "assets/Arknights_SD/char_199_yak2.atlas",
    animation: "walk",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/Arknights_SD/yak_thumbnail.png",
  },

 {
    id: "monster_spider",
    title: "몬스터_거미",
    role: "리깅 & 애니메이션",
    tags: ["SD애니메이션"],
    description: "명일방주의 훈련용 흉폭한 글룸핀서 SD 애니메이션입니다.※원작 아트 리소스를 기반으로 리깅·애니메이션을 직접 제작한 연습작입니다. 원본 아트의 저작권은 각 게임사에 있습니다.",
    skeleton: "assets/monster_spider/monster_spider.json",
    atlas: "assets/monster_spider/monster_spider.atlas",
    animation: "walk",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/monster_spider/monster_spider_thumbnail.png",
  },
{
    id: "monster_wolf",
    title: "몬스터_늑대",
    role: "리깅 & 애니메이션",
    tags: ["SD애니메이션"],
    description: "명일방주의 흉폭한 사냥개 Pro SD 애니메이션 입니다.※원작 아트 리소스를 기반으로 리깅·애니메이션을 직접 제작한 연습작입니다. 원본 아트의 저작권은 각 게임사에 있습니다",
    skeleton: "assets/monster_wolf/monster_wolf.json",
    atlas: "assets/monster_wolf/monster_wolf.atlas",
    animation: "run",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/monster_wolf/monster_wolf_thumbnail.gif",
  },

{
    id: "df_hug_me",
    title: "안아줘요_던전앤파이터_애니메이션",
    role: "직접 그린 애니메이션입니다.",
    tags: ["영상","습작"],
    description: "프레임을 직접 그려서 만든 안아줘요와 던전앤파이터 스프라이트 애니메이션입니다.",
    type: "video",
    media: "assets/df_hug_me/df_hug_me.mp4",
    thumbnail: "assets/df_hug_me/df_hug_me_thumbnail.png",
    backgroundColor: "#000000ff",
},
{
    id: "zzz_bangboo",
    title: "baaaangboo_젠레스 존 제로_애니메이션",
    role: "직접 그린 애니메이션입니다.",
    tags: ["영상","습작"],
    description: "프레임을 직접 그려서 만든 젠레스 존 제로의 방부 캐릭터로 smooooch・∀・ 뮤비를 패러디한 스프라이트 애니메이션입니다.",
    type: "video",
    media: "assets/zzz_bangboo/baaaangboo.mp4",
    thumbnail: "assets/zzz_bangboo/baaaangboo_thumbnail.png",
    backgroundColor: "#000000ff",
},

  {
    id: "effect_water",
    title: "붉은_물_습작",
    role: "직접 그린 GIF 이펙트 습작입니다",
    tags: ["이펙트", "GIF", "습작", "물"],
    description:
      "프레임을 직접 그려서 만든 GIF 이펙트 애니메이션입니다.",
    type: "sprite",
    media: "assets/effect_water/red_water.gif",
    backgroundColor: "#101018ff",
  },
{
    id: "effect_fir",
    title: "푸른_불꽃_습작",
    role: "직접 그린 이펙트 습작입니다",
    tags: ["영상", "이펙트","습작", "불꽃"],
    description: "프레임을 직접 그려서 만든 스프라이트 애니메이션입니다.",
    type: "video",
    media: "assets/effect_fire/blue_fire.mp4",
    thumbnail: "assets/effect_fire/blue_fire_thumbnail.png",
    backgroundColor: "#000000ff",
},
];
