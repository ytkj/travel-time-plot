module.exports =
`
<html>
<body>
<div id="container" class="Nav_nori_On Pusr_logOff Pusr_inValid " >
<div id="headline" style="display:none;" ><!-- ヘッドライン --></div>
<div id="header" >
<div id="header_top">
<a id="logo" href="/" ><img src="/com/img/base/logo_jrd_v3.png" width="122" height="29" alt="ジョルダン" /></a>
<h1 id="header_catch" >乗換案内でスマートに！運行情報、時刻表、駅情報も。</h1>
<form action="https://www.jorudan.co.jp/jt/cgi/qsearch/qsearch.cgi" method="get" id="qsearch" onsubmit="return qSearch_sbmt_v3(this)" style="padding-top:19px;" >
<input type="text" id="qsearch_text"  name="s" size="50" maxlength="200" value="" tabindex="" placeholder="湘南新宿ライン" />
<input type="submit" value="検索" tabindex="" id="qsearch_sbmt" />
<a id="qsearch_help" href="/info/news/daitai.html" target="_blank" title="だいたい案内って！？" >だいたい案内って！？</a>
</form>
<ul id="header_subnav"><li><a href="/info/sitemap.html">サイトマップ</a></li><li><a href="/info/">ヘルプ</a></li><li><a href="https://world.jorudan.co.jp/mln/">English</a></li></ul>
</div><!-- /header_top -->
<div id="nav_bg">
<ul id="navi">
<li class="navL nav_home"><a href="/" class="navL_a"  ><b>HOME</b></a></li>
<li class="navL nav_nori"><a href="/norikae/" class="navL_a" ><b>乗換案内</b></a>
<ul class="navL_in">
<li><a class="navL_s" href="/norikae/" >詳細検索</a></li>
<li><a class="navL_s" href="/norikae/seishun18.html" >青春18きっぷ</a></li>
<li><a class="navL_s" href="/norikae/zipang.html" >ジパング検索</a></li>
<li><a class="navL_s" href="/norikae/teiki.html" >定期代検索</a></li>
</ul>
</li>
<li class="navL nav_time"><a href="/time/" class="navL_a" ><b>時刻表</b></a>
<ul class="navL_in ">
<li><a class="navL_s" href="/time/" >駅・フェリー</a></li>
<li><a class="navL_s" href="/time/shinkansen.html" >新幹線</a></li>
<li><a class="navL_s" href="/time/air.html" >空路</a></li>
</ul>
</li>
<li class="navL nav_bus"><a href="/bus/rosen/" class="navL_a" ><b>バス</b></a>
<ul class="navL_in ">
<li><a class="navL_s" href="/bus/rosen/" >路線バス</a></li>
<li><a class="navL_s" href="/bus/highway/" >高速バス</a></li>
<li><a class="navL_s" href="/bus/airport/" >空港バス</a></li>
<li><a class="navL_s" href="/bus/midnight/" >深夜バス</a></li>
</ul>
</li>
<li class="navL nav_live"><a href="/unk/live.html" class="navL_a" ><b>ジョルダンライブ!</b></a></li>
<li class="navL nav_unk"><a href="/unk/" class="navL_a" ><b>運行情報</b></a></li>
<li class="navL nav_eki"><a href="/eki/" class="navL_a" ><b>駅の情報</b></a>
<ul class="navL_in ">
<li><a class="navL_s" href="/eki/" >駅総合情報</a></li>
<li><a class="navL_s" href="/eki/kounaizu.html" >構内図</a></li>
<li><a class="navL_s" href="/eki/map.html" >出口・地図</a></li>
<li><a class="navL_s" href="/eki/hotel.html" >ホテル</a></li>
<li><a class="navL_s" href="https://bimi.jorudan.co.jp/" target="_blank" >グルメ</a></li>
<li><a class="navL_s" href="/eki/ranking.html" >行き先ランキング</a></li>
</ul>
</li>
<li class="navL nav_world"><a href="http://world.jorudan.co.jp/adv/metro/?af=0" class="navL_a"  ><b>海外乗換案内</b></a>
<ul class="navL_in ">
<li><a class="navL_s" href="http://world.jorudan.co.jp/adv/metro/?af=0" >海外地下鉄案内</a></li>
<li><a class="navL_s" href="http://world.jorudan.co.jp/adv/airline/?af=0" >海外空路検索</a></li>
</ul>
</li>
<li class="navR" id="pusr_logon" >
<a href="/mypage/" class="navR_a" ><em id="pusr_logon_i"></em><em class="pusr_type"></em> Myページ </a>
<a title="ログアウト" href="/webuser/logout.cgi" class="pusr_logout_btn" >ログアウト</a>
<ul class="navR_in ">
<li><a class="navR_s" href="/webuser/logout.cgi" >ログアウト</a></li>
<li><a class="navR_s" href="/mypage/point.html" >Myポイント・履歴</a></li>
<li><a class="navR_s" href="/mypage/route.html" >Myルート・履歴</a></li>
<li><a class="navR_s" href="/mypage/teiki.html" >My定期</a></li>
<li><a class="navR_s" href="https://www.jorudan.co.jp/webuser/regist.cgi" >Myデータ</a></li>
<li><a class="navR_s" href="/info/help/nori_faq.html" >よくある質問</a></li>
</ul>
</li>
<li class="navR" id="pusr_logoff" >
<a href="/webuser/login.cgi?nexturl=%2Fnorikae%2Fcgi%2Fnori.cgi%3Frf%3Dtop%26eok1%3D%26eok2%3D%26pg%3D0%26eki1%3D%25E6%2596%25B0%25E5%25A4%25A7%25E5%25A1%259A%26Cmap1%3D%26eki2%3D%25E6%2596%25B0%25E5%25B7%259D%25E5%25B4%258E%26Dym%3D201706%26Ddd%3D1%26Dhh%3D7%26Dmn1%3D0%26Dmn2%3D0%26Cway%3D0%26Cfp%3D1%26Czu%3D2%26S.x%3D71%26S.y%3D17%26S%3D%25E6%25A4%259C%25E7%25B4%25A2%26Csg%3D1" class="navR_a"  ><em id="pusr_logoff_i" ></em>ログイン</a>
<ul class="navR_in ">
<li><a class="navR_s" href="/info/news/" >PREMIUM とは？</a></li>
</ul>
</li>
</ul><!-- /navi -->
</div><!-- /nav_bg -->
</div><!-- /header -->
<div id="contents_out" >
<div id="news">
<!--a href="/bus/rosen/" class="i_new" >4/3（月）［佐賀県］佐賀市営バス追加</a-->
</div>
<div id="pan">
<a href="/">Home</a>
&gt; <a href="/norikae/">乗換案内</a>
&gt; <b>新大塚→新川崎</b>
</div><!-- /pan -->
<div id="contents" >
<div id="left">
<div class="heading"><h2 class="time">
新大塚→新川崎
</h2></div>
<div class="h_big"><h3>
<em>2017/06/01（木） 07:00 出発</em>
<a class="again" href="#search">条件変更</a>
<a class="faq" href="/info/help/nori_faq.html#i_1" target="_blank">全印刷について</a>
</h3></div>
<div class="addtime2" ><a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=-60">&lt;60分前</a>　<a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=-30">&lt;30分前</a>　<a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=-10">&lt;10分前</a>　<a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=-5">&lt;5分前</a><em>　</em><a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=5">5分後&gt;</a>　<a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=10">10分後&gt;</a>　<a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=30">30分後&gt;</a>　<a href="/norikae/cgi/nori.cgi?Sok=1&pg=0&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&rf=nr&Add=60">60分後&gt;</a>
</div>
<div id="Bk_list" class="bk_list" >
<div id="Bk_list_header" class="header" >
</div><!--header-->
<div class="bk_list_body">
<table><tbody id="Bk_list_tbody">
<tr>
<td class="t1">経路1</td>
<td>07:00発 → 07:40着</td>
<td>40分</td>
<td class="c">乗換 1回</td>
<td class="total total_ic">629円</td>
<td class="icon">
<img src="/norikae/img/nr0_s.gif"  alt="ＪＲ" /><img src="/norikae/img/nr2_s.gif"  alt="地下鉄" />
</td>
</tr>
<tr>
<td class="t1">経路2</td>
<td>07:03発 → 07:47着</td>
<td>44分</td>
<td class="c">乗換 1回</td>
<td class="total total_ic">497円</td>
<td class="icon">
<img src="/norikae/img/nr0_s.gif"  alt="ＪＲ" /><img src="/norikae/img/nr2_s.gif"  alt="地下鉄" />
</td>
</tr>
<tr>
<td class="t1">経路3</td>
<td>07:00発 → 08:03着</td>
<td>1時間3分</td>
<td class="c">乗換 2回</td>
<td class="total total_ic">523円</td>
<td class="icon">
<img src="/norikae/img/nr0_s.gif"  alt="ＪＲ" /><img src="/norikae/img/nr1_s.gif"  alt="私鉄" /><img src="/norikae/img/nr2_s.gif"  alt="地下鉄" />
</td>
</tr>
<tr>
<td class="t1">経路4</td>
<td>07:00発 → 08:03着</td>
<td>1時間3分</td>
<td class="c">乗換 3回</td>
<td class="total total_ic">658円</td>
<td class="icon">
<img src="/norikae/img/nr0_s.gif"  alt="ＪＲ" /><img src="/norikae/img/nr1_s.gif"  alt="私鉄" /><img src="/norikae/img/nr2_s.gif"  alt="地下鉄" />
</td>
</tr>
</tbody></table>
</div>
</div>
<div id="results">
<div class="bk_result" id="bR1">
<div class="header">
<h5 id="hR1">経路 1</h5>
<img src="/norikae/img/hyouka0.gif" alt="早い" width="19" height="18" />
<img src="/norikae/img/hyouka2.gif" alt="乗換回数が少ない" width="19" height="18" />
<a class="nr_keiro_btn teiki" target="_blank" href="/norikae/cgi/nori.cgi?Sok=1&pg=2&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&Cid=0&rf=nr" ><em></em>定期代</a>
<span id="bR1_btn_farePay" ><!-- --></span>
</div>
<div class="data">
<div class="data_line_1">
<div class="data_tm"><b>07:00</b>発<b> → </b><b>07:40</b>着</div>
<dl  class="data_total">
<dt>総額</dt>
<dd id="bR1_total_IC"  ><b>629円</b>
<span class="ic-type"> (IC利用)</span>
</dd>
<dd id="bR1_total_KIP" style="display:none;" ><b>640円</b>
<span class="ic-type"> (切符利用)</span>
</dd>
</dl><!-- /data_total -->
</div><!-- /data_line_1 -->
<dl class="data_total-time"><dt>所要時間</dt><dd><b>40分</b></dd></dl>
<dl><dt>乗車時間</dt><dd><b>33分</b></dd></dl>
<dl class="data_norikae-num"><dt>乗換</dt><dd><b>1回</b></dd></dl>
<dl><dt>距離</dt><dd><b>29.9km</b></dd></dl>
</div><!-- /data -->
<div class="datasub" >
<div class="d1">
</div><!-- /d1 -->
<div class="d2">
<a class="print" onmousedown="change_nori_url(this,0)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=p&Cid=0" target="_blank" >印刷</a>
<a class="txt" onmousedown="change_nori_url(this,0)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=t&Cid=0" target="_blank" >テキスト</a>
</div><!-- /d2 -->
</div><!-- /datasub -->
<div class="sp0" style="height:3px;" ></div>
<div class="sp0" style="height:2px;" ></div>
<div class="route">
<table>
<tr class="mono">
<td class="d1"></td>
<td class="d2"></td>
<td class="d3"></td>
<td class="d4"></td>
<td class="d5"></td>
<td class="d6"></td>
<td class="d7"></td>
<td class="d8"></td>
<td class="d9"></td>
</tr>
<tr><th colspan="5">経路</th><th>乗車位置</th><th>運賃</th><th>指定席/料金</th><th>距離</th></tr>
<tr class="eki eki_s">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新大塚</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>2番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=0" onclick="j_cc('nori_keiro_time_1_0',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_1_0',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新大塚','n_kp1_0');" onclick="j_cc('nori_keiro_rosenzu_1_0',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_map.html" onclick="j_cc('nori_keiro_map_1_0',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_shisetsu.html?rnm=%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_1_0',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_coupon_1_0',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_gourmet_1_0',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:00-07:02</b>
<br />
2分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr2.gif"  alt="地下鉄" />
</td>
<td class="rn" >
<div>東京メトロ丸ノ内線(池袋行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" >2・4号車</td>
<td id="bR1_0_fare" class="fr">
165円
</td>
<td id="bR1_0_fee" class="st">
</td>
<td class="km" >
1.8km
</td></tr>
<tr class="eki">
<td class="tm">
（7分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>池袋</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>1･2番線着</div>
<div>2番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%B1%A0%E8%A2%8B_%E6%B9%98%E5%8D%97%E6%96%B0%E5%AE%BF%E3%83%A9%E3%82%A4%E3%83%B3.html?Dym=201706&Ddd=01&Dhh=7&Dmn=9" onclick="j_cc('nori_keiro_time_1_1',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%B1%A0%E8%A2%8B_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_1_1',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','池袋','n_kp1_1');" onclick="j_cc('nori_keiro_rosenzu_1_1',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%B1%A0%E8%A2%8B_map.html" onclick="j_cc('nori_keiro_map_1_1',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%B1%A0%E8%A2%8B_shisetsu.html?rnm=%E6%B9%98%E5%8D%97%E6%96%B0%E5%AE%BF%E3%83%A9%E3%82%A4%E3%83%B3" onclick="j_cc('nori_keiro_shisetsu_1_1',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%B1%A0%E8%A2%8B.html" onclick="j_cc('nori_keiro_coupon_1_1',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%B1%A0%E8%A2%8B.html" onclick="j_cc('nori_keiro_gourmet_1_1',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:09-07:40</b>
<br />
31分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr0.gif"  alt="ＪＲ" />
</td>
<td class="rn" >
<div>湘南新宿ライン(大船行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" ></td>
<td id="bR1_1_fare" class="fr">
464円
</td>
<td id="bR1_1_fee" class="st">
</td>
<td class="km" >
28.1km
</td></tr>
<tr class="eki eki_e">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新川崎</strong></td>
<td class="pp"></td>
<td class="ph">
<div>2番線着</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新川崎','n_kp1_99');" onclick="j_cc('nori_keiro_rosenzu_1_99',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E_map.html" onclick="j_cc('nori_keiro_map_1_99',this)" target="_blank">地図</a>
<br />
<a class="hotel" href="javascript:jrd_hotel_pop('新川崎','n_kp1_99','','201706',1);" onclick="j_cc('nori_keiro_hotel_1_99',this)" >ホテル</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('nori_keiro_gourmet_1_99',this)" target="_blank">グルメ</a>
</td></tr>
</table>
</div>
<div class="footer">
<div class="airlimit">空路有効期間：2017年5月1日-2017年6月30日</div>
<a href="#search" class="again">条件変更</a>
</div>
<div id="Ads_google_route_1" style="text-align:center;" ><!-- --></div>
</div>
<div class="bk_result" id="bR2">
<div class="header">
<h5 id="hR2">経路 2</h5>
<img src="/norikae/img/hyouka1.gif" alt="安い" width="19" height="18" />
<img src="/norikae/img/hyouka2.gif" alt="乗換回数が少ない" width="19" height="18" />
<a class="nr_keiro_btn teiki" target="_blank" href="/norikae/cgi/nori.cgi?Sok=1&pg=2&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&Cid=1&rf=nr" ><em></em>定期代</a>
<span id="bR2_btn_farePay" ><!-- --></span>
</div>
<div class="data">
<div class="data_line_1">
<div class="data_tm"><b>07:03</b>発<b> → </b><b>07:47</b>着</div>
<dl  class="data_total">
<dt>総額</dt>
<dd id="bR2_total_IC"  ><b>497円</b>
<span class="ic-type"> (IC利用)</span>
</dd>
<dd id="bR2_total_KIP" style="display:none;" ><b>510円</b>
<span class="ic-type"> (切符利用)</span>
</dd>
</dl><!-- /data_total -->
</div><!-- /data_line_1 -->
<dl class="data_total-time"><dt>所要時間</dt><dd><b>44分</b></dd></dl>
<dl><dt>乗車時間</dt><dd><b>35分</b></dd></dl>
<dl class="data_norikae-num"><dt>乗換</dt><dd><b>1回</b></dd></dl>
<dl><dt>距離</dt><dd><b>26.4km</b></dd></dl>
</div><!-- /data -->
<div class="datasub" >
<div class="d1">
</div><!-- /d1 -->
<div class="d2">
<a class="print" onmousedown="change_nori_url(this,1)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=p&Cid=1" target="_blank" >印刷</a>
<a class="txt" onmousedown="change_nori_url(this,1)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=t&Cid=1" target="_blank" >テキスト</a>
</div><!-- /d2 -->
</div><!-- /datasub -->
<div class="sp0" style="height:3px;" ></div>
<table class="nrb_unk" ><tr><th>運行情報</th><td>
<a href="javascript:kjpop('U'+encodeURI('横須賀線'),20170601)" >横須賀線</a>
</td></tr></table>
<table class="nrb_unk nrb_unk_live" ><tr><th>ジョルダンライブ!</th><td>
<a href="javascript:kjpop('L'+encodeURI('横須賀線'),20170601)" >横須賀線</a>
</td></tr></table>
<div class="sp0" style="height:2px;" ></div>
<div class="route">
<table>
<tr class="mono">
<td class="d1"></td>
<td class="d2"></td>
<td class="d3"></td>
<td class="d4"></td>
<td class="d5"></td>
<td class="d6"></td>
<td class="d7"></td>
<td class="d8"></td>
<td class="d9"></td>
</tr>
<tr><th colspan="5">経路</th><th>乗車位置</th><th>運賃</th><th>指定席/料金</th><th>距離</th></tr>
<tr class="eki eki_s">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新大塚</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>1番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=3" onclick="j_cc('nori_keiro_time_2_0',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_2_0',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新大塚','n_kp2_0');" onclick="j_cc('nori_keiro_rosenzu_2_0',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_map.html" onclick="j_cc('nori_keiro_map_2_0',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_shisetsu.html?rnm=%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_2_0',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_coupon_2_0',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_gourmet_2_0',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:03-07:16</b>
<br />
13分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr2.gif"  alt="地下鉄" />
</td>
<td class="rn" >
<div>東京メトロ丸ノ内線(荻窪行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" >2・5号車</td>
<td id="bR2_0_fare" class="fr">
195円
</td>
<td id="bR2_0_fee" class="st">
</td>
<td class="km" >
6.9km
</td></tr>
<tr class="eki">
<td class="tm">
（9分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>東京</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>1番線着</div>
<div>総武1番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%9D%B1%E4%BA%AC_%E6%A8%AA%E9%A0%88%E8%B3%80%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=25" onclick="j_cc('nori_keiro_time_2_1',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%9D%B1%E4%BA%AC_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_2_1',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','東京','n_kp2_1');" onclick="j_cc('nori_keiro_rosenzu_2_1',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%9D%B1%E4%BA%AC_map.html" onclick="j_cc('nori_keiro_map_2_1',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%9D%B1%E4%BA%AC_shisetsu.html?rnm=%E6%A8%AA%E9%A0%88%E8%B3%80%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_2_1',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%9D%B1%E4%BA%AC.html" onclick="j_cc('nori_keiro_coupon_2_1',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%9D%B1%E4%BA%AC.html" onclick="j_cc('nori_keiro_gourmet_2_1',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:25-07:47</b>
<br />
22分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr0.gif"  alt="ＪＲ" />
</td>
<td class="rn" >
<div>横須賀線(久里浜行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" ></td>
<td id="bR2_1_fare" class="fr">
302円
</td>
<td id="bR2_1_fee" class="st">
</td>
<td class="km" >
19.5km
</td></tr>
<tr class="eki eki_e">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新川崎</strong></td>
<td class="pp"></td>
<td class="ph">
<div>2番線着</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新川崎','n_kp2_99');" onclick="j_cc('nori_keiro_rosenzu_2_99',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E_map.html" onclick="j_cc('nori_keiro_map_2_99',this)" target="_blank">地図</a>
<br />
<a class="hotel" href="javascript:jrd_hotel_pop('新川崎','n_kp2_99','','201706',1);" onclick="j_cc('nori_keiro_hotel_2_99',this)" >ホテル</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('nori_keiro_gourmet_2_99',this)" target="_blank">グルメ</a>
</td></tr>
</table>
</div>
<div class="footer">
<div class="airlimit">空路有効期間：2017年5月1日-2017年6月30日</div>
<a href="#search" class="again">条件変更</a>
</div>
<form action="https://api.jorudan.co.jp/hotel_vrg/cgi/l.cgi" method="get" name="fm_htlv2" class="htlv_form" target="_blank" onsubmit="htlv_submit(this)" >
<div class="htlv_h ">
<h5><b>ホテル検索</b><div></div></h5>
<p class="cmp"><a href="http://www.travel.co.jp/stay/" target="_blank" ><img src="/norikae/img/logo_travel_jp_w70.png" alt="Travel.jp" /></a></p>
</div>
<div class="htlv_b">
<p class="jk">
<select name="e" size="1" tabindex="10" >
<option value="新大塚"  >新大塚</option>
<option value="東京"  >東京</option>
<option value="新川崎" selected="selected" >新川崎</option>
</select>　
<select name="yyyymm" size="1" tabindex="10" >
<option value="201706" selected="selected" >2017年6月</option>
<option value="201707"  >2017年7月</option>
<option value="201708"  >2017年8月</option>
<option value="201709"  >2017年9月</option>
<option value="201710"  >2017年10月</option>
</select>
<select name="dd" size="1" tabindex="10" >
<option value="1" selected=selected >1日</option>
<option value="2"  >2日</option>
<option value="3"  >3日</option>
<option value="4"  >4日</option>
<option value="5"  >5日</option>
<option value="6"  >6日</option>
<option value="7"  >7日</option>
<option value="8"  >8日</option>
<option value="9"  >9日</option>
<option value="10"  >10日</option>
<option value="11"  >11日</option>
<option value="12"  >12日</option>
<option value="13"  >13日</option>
<option value="14"  >14日</option>
<option value="15"  >15日</option>
<option value="16"  >16日</option>
<option value="17"  >17日</option>
<option value="18"  >18日</option>
<option value="19"  >19日</option>
<option value="20"  >20日</option>
<option value="21"  >21日</option>
<option value="22"  >22日</option>
<option value="23"  >23日</option>
<option value="24"  >24日</option>
<option value="25"  >25日</option>
<option value="26"  >26日</option>
<option value="27"  >27日</option>
<option value="28"  >28日</option>
<option value="29"  >29日</option>
<option value="30"  >30日</option>
<option value="31"  >31日</option>
</select>
<select name="term" size="1" tabindex="10" >
<option value="1" selected="selected">1泊</option>
<option value="2" >2泊</option>
<option value="3" >3泊</option>
<option value="4" >4泊</option>
<option value="5" >5泊</option>
<option value="6" >6泊</option>
<option value="7" >7泊</option>
<option value="8" >8泊</option>
<option value="9" >9泊</option>
<option value="10" >10泊</option>
</select>
<select name="heads" size="1" tabindex="10" >
<option value="1" selected="selected">1名</option>
<option value="2" >2名</option>
<option value="3" >3名</option>
<option value="4" >4名</option>
<option value="5" >5名</option>
<option value="6" >6名</option>
<option value="7" >7名</option>
<option value="8" >8名</option>
<option value="9" >9名</option>
<option value="10" >10名</option>
</select>
<select name="rooms" size="1" tabindex="10" >
<option value="1" selected="selected">1室</option>
<option value="2" >2室</option>
<option value="3" >3室</option>
<option value="4" >4室</option>
<option value="5" >5室</option>
<option value="6" >6室</option>
<option value="7" >7室</option>
<option value="8" >8室</option>
<option value="9" >9室</option>
<option value="10" >10室</option>
</select>
　<input name="purpose_ids[]" class="ckb" id="purpose_ids51" value="51" tabindex="10" type="checkbox"> <label for="purpose_ids51">ビジネス利用</label>
<br />
料金
<select name="charge_min" size="1" tabindex="10" >
<option value="0">下限なし</option>
<option value="10000">10,000</option>
<option value="20000">20,000</option>
<option value="30000">30,000</option>
<option value="40000">40,000</option>
<option value="50000">50,000</option>
</select>～<select name="charge_max" size="1" tabindex="10" >
<option value="0">上限なし</option>
<option value="10000" selected="selected" >10,000</option>
<option value="20000">20,000</option>
<option value="30000">30,000</option>
<option value="40000">40,000</option>
<option value="50000">50,000</option>
</select>　
<select name="meal" size="1" tabindex="10" >
<option value="000">食事なし</option>
<option value="122">朝あり</option>
<option value="120">朝あり夕食なし</option>
<option value="121">朝夕あり</option>
</select>
　<select name="order" size="1" tabindex="10"><option value="default">おすすめ順</option><option value="rate">評価順</option><option value="low">安い順</option><option value="high">高い順</option></select>　<a href="javascript:jrd_hotel_pop(document.fm_htlv2.e.value,'n_fp2','fm_htlv2');" class="hotel" >詳細を選択</a>
</p>
<p class="sbmt"><input type="submit" name="sbmt" value="ホテル検索" tabindex="10" /></p>
</div>
<input type="hidden" name="lc" value="n_fs2" />
</form>
</div>
<div class="bk_result" id="bR3">
<div class="header">
<h5 id="hR3">経路 3</h5>
<a class="nr_keiro_btn teiki" target="_blank" href="/norikae/cgi/nori.cgi?Sok=1&pg=2&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&Cid=2&rf=nr" ><em></em>定期代</a>
<span id="bR3_btn_farePay" ><!-- --></span>
</div>
<div class="data">
<div class="data_line_1">
<div class="data_tm"><b>07:00</b>発<b> → </b><b>08:03</b>着</div>
<dl  class="data_total">
<dt>総額</dt>
<dd id="bR3_total_IC"  ><b>523円</b>
<span class="ic-type"> (IC利用)</span>
</dd>
<dd id="bR3_total_KIP" style="display:none;" ><b>540円</b>
<span class="ic-type"> (切符利用)</span>
</dd>
</dl><!-- /data_total -->
</div><!-- /data_line_1 -->
<dl class="data_total-time"><dt>所要時間</dt><dd><b>1時間3分</b></dd></dl>
<dl><dt>乗車時間</dt><dd><b>42分</b></dd></dl>
<dl class="data_norikae-num"><dt>乗換</dt><dd><b>2回</b></dd></dl>
<dl><dt>距離</dt><dd><b>24.2km</b></dd></dl>
</div><!-- /data -->
<div class="datasub" >
<div class="d1">
</div><!-- /d1 -->
<div class="d2">
<a class="print" onmousedown="change_nori_url(this,2)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=p&Cid=2" target="_blank" >印刷</a>
<a class="txt" onmousedown="change_nori_url(this,2)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=t&Cid=2" target="_blank" >テキスト</a>
</div><!-- /d2 -->
</div><!-- /datasub -->
<div class="sp0" style="height:3px;" ></div>
<table class="nrb_unk" ><tr><th>運行情報</th><td>
<a href="javascript:kjpop('U'+encodeURI('横須賀線'),20170601)" >横須賀線</a>
</td></tr></table>
<table class="nrb_unk nrb_unk_live" ><tr><th>ジョルダンライブ!</th><td>
<a href="javascript:kjpop('L'+encodeURI('横須賀線'),20170601)" >横須賀線</a>
</td></tr></table>
<div class="sp0" style="height:2px;" ></div>
<div class="route">
<table>
<tr class="mono">
<td class="d1"></td>
<td class="d2"></td>
<td class="d3"></td>
<td class="d4"></td>
<td class="d5"></td>
<td class="d6"></td>
<td class="d7"></td>
<td class="d8"></td>
<td class="d9"></td>
</tr>
<tr><th colspan="5">経路</th><th>乗車位置</th><th>運賃</th><th>指定席/料金</th><th>距離</th></tr>
<tr class="eki eki_s">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新大塚</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>2番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=0" onclick="j_cc('nori_keiro_time_3_0',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_3_0',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新大塚','n_kp3_0');" onclick="j_cc('nori_keiro_rosenzu_3_0',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_map.html" onclick="j_cc('nori_keiro_map_3_0',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_shisetsu.html?rnm=%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_3_0',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_coupon_3_0',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_gourmet_3_0',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:00-07:02</b>
<br />
2分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr2.gif"  alt="地下鉄" />
</td>
<td class="rn" >
<div>東京メトロ丸ノ内線(池袋行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" >前／6号車</td>
<td id="bR3_0_fare" class="fr">
195円
</td>
<td id="bR3_0_fee" class="st">
</td>
<td class="km" >
1.8km
</td></tr>
<tr class="eki">
<td class="tm">
（7分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>池袋</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>1･2番線着</div>
<div>5番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%B1%A0%E8%A2%8B_%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E5%89%AF%E9%83%BD%E5%BF%83%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=9" onclick="j_cc('nori_keiro_time_3_1',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%B1%A0%E8%A2%8B_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_3_1',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','池袋','n_kp3_1');" onclick="j_cc('nori_keiro_rosenzu_3_1',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%B1%A0%E8%A2%8B_map.html" onclick="j_cc('nori_keiro_map_3_1',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%B1%A0%E8%A2%8B_shisetsu.html?rnm=%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E5%89%AF%E9%83%BD%E5%BF%83%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_3_1',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%B1%A0%E8%A2%8B.html" onclick="j_cc('nori_keiro_coupon_3_1',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%B1%A0%E8%A2%8B.html" onclick="j_cc('nori_keiro_gourmet_3_1',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:09-07:26</b>
<br />
17分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr2.gif"  alt="地下鉄" />
</td>
<td class="rn" >
<div>東京メトロ副都心線(菊名行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" >やや後</td>
<td id="bR3_1_fare" class="fr">
↓
</td>
<td id="bR3_1_fee" class="st">
</td>
<td class="km" >
8.9km
</td></tr>
<tr class="eki">
<td class="tm">
（1分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>渋谷 ≪直通≫</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>3･4番線着</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%B8%8B%E8%B0%B7_%E6%9D%B1%E6%80%A5%E6%9D%B1%E6%A8%AA%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=27" onclick="j_cc('nori_keiro_time_3_2',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%B8%8B%E8%B0%B7_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_3_2',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','渋谷','n_kp3_2');" onclick="j_cc('nori_keiro_rosenzu_3_2',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%B8%8B%E8%B0%B7_map.html" onclick="j_cc('nori_keiro_map_3_2',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%B8%8B%E8%B0%B7_shisetsu.html?rnm=%E6%9D%B1%E6%80%A5%E6%9D%B1%E6%A8%AA%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_3_2',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%B8%8B%E8%B0%B7.html" onclick="j_cc('nori_keiro_coupon_3_2',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%B8%8B%E8%B0%B7.html" onclick="j_cc('nori_keiro_gourmet_3_2',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:27-07:47</b>
<br />
20分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr1.gif"  alt="私鉄" />
</td>
<td class="rn" >
<div>東急東横線(菊名行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" ></td>
<td id="bR3_2_fare" class="fr">
195円
</td>
<td id="bR3_2_fee" class="st">
</td>
<td class="km" >
10.8km
</td></tr>
<tr class="eki">
<td class="tm">
（13分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>武蔵小杉</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>1番線着</div>
<div>3番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89_%E6%A8%AA%E9%A0%88%E8%B3%80%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=8&Dmn=0" onclick="j_cc('nori_keiro_time_3_3',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_3_3',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','武蔵小杉','n_kp3_3');" onclick="j_cc('nori_keiro_rosenzu_3_3',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89_map.html" onclick="j_cc('nori_keiro_map_3_3',this)" target="_blank">地図</a>
<br />
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89.html" onclick="j_cc('nori_keiro_coupon_3_3',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89.html" onclick="j_cc('nori_keiro_gourmet_3_3',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>08:00-08:03</b>
<br />
3分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr0.gif"  alt="ＪＲ" />
</td>
<td class="rn" >
<div>横須賀線(久里浜行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" ></td>
<td id="bR3_3_fare" class="fr">
133円
</td>
<td id="bR3_3_fee" class="st">
</td>
<td class="km" >
2.7km
</td></tr>
<tr class="eki eki_e">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新川崎</strong></td>
<td class="pp"></td>
<td class="ph">
<div>2番線着</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新川崎','n_kp3_99');" onclick="j_cc('nori_keiro_rosenzu_3_99',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E_map.html" onclick="j_cc('nori_keiro_map_3_99',this)" target="_blank">地図</a>
<br />
<a class="hotel" href="javascript:jrd_hotel_pop('新川崎','n_kp3_99','','201706',1);" onclick="j_cc('nori_keiro_hotel_3_99',this)" >ホテル</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('nori_keiro_gourmet_3_99',this)" target="_blank">グルメ</a>
</td></tr>
</table>
</div>
<div class="footer">
<div class="airlimit">空路有効期間：2017年5月1日-2017年6月30日</div>
<a href="#search" class="again">条件変更</a>
</div>
<div id="Ads_google_route_3" style="text-align:center;" ><!-- --></div>
</div>
<div class="bk_result" id="bR4">
<div class="header">
<h5 id="hR4">経路 4</h5>
<a class="nr_keiro_btn teiki" target="_blank" href="/norikae/cgi/nori.cgi?Sok=1&pg=2&Dym=201706&Ddd=01&Dhh=7&Dmn=0&eki1=%BF%B7%C2%E7%C4%CD&eok1=R-&eki2=%BF%B7%C0%EE%BA%EA&eok2=R-&C1=0&C2=0&C3=0&C4=0&C6=2&C18=0&Cfp=1&Cway=0&Cid=3&rf=nr" ><em></em>定期代</a>
<span id="bR4_btn_farePay" ><!-- --></span>
</div>
<div class="data">
<div class="data_line_1">
<div class="data_tm"><b>07:00</b>発<b> → </b><b>08:03</b>着</div>
<dl  class="data_total">
<dt>総額</dt>
<dd id="bR4_total_IC"  ><b>658円</b>
<span class="ic-type"> (IC利用)</span>
</dd>
<dd id="bR4_total_KIP" style="display:none;" ><b>680円</b>
<span class="ic-type"> (切符利用)</span>
</dd>
</dl><!-- /data_total -->
</div><!-- /data_line_1 -->
<dl class="data_total-time"><dt>所要時間</dt><dd><b>1時間3分</b></dd></dl>
<dl><dt>乗車時間</dt><dd><b>37分</b></dd></dl>
<dl class="data_norikae-num"><dt>乗換</dt><dd><b>3回</b></dd></dl>
<dl><dt>距離</dt><dd><b>23.5km</b></dd></dl>
</div><!-- /data -->
<div class="datasub" >
<div class="d1">
</div><!-- /d1 -->
<div class="d2">
<a class="print" onmousedown="change_nori_url(this,3)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=p&Cid=3" target="_blank" >印刷</a>
<a class="txt" onmousedown="change_nori_url(this,3)" href="/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=71&S.y=17&S=%E6%A4%9C%E7%B4%A2&Csg=1&type=t&Cid=3" target="_blank" >テキスト</a>
</div><!-- /d2 -->
</div><!-- /datasub -->
<div class="sp0" style="height:3px;" ></div>
<table class="nrb_unk" ><tr><th>運行情報</th><td>
<a href="javascript:kjpop('U'+encodeURI('横須賀線'),20170601)" >横須賀線</a>
</td></tr></table>
<table class="nrb_unk nrb_unk_live" ><tr><th>ジョルダンライブ!</th><td>
<a href="javascript:kjpop('L'+encodeURI('横須賀線'),20170601)" >横須賀線</a>
</td></tr></table>
<div class="sp0" style="height:2px;" ></div>
<div class="route">
<table>
<tr class="mono">
<td class="d1"></td>
<td class="d2"></td>
<td class="d3"></td>
<td class="d4"></td>
<td class="d5"></td>
<td class="d6"></td>
<td class="d7"></td>
<td class="d8"></td>
<td class="d9"></td>
</tr>
<tr><th colspan="5">経路</th><th>乗車位置</th><th>運賃</th><th>指定席/料金</th><th>距離</th></tr>
<tr class="eki eki_s">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新大塚</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>2番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=0" onclick="j_cc('nori_keiro_time_4_0',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_4_0',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新大塚','n_kp4_0');" onclick="j_cc('nori_keiro_rosenzu_4_0',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_map.html" onclick="j_cc('nori_keiro_map_4_0',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_shisetsu.html?rnm=%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD%E4%B8%B8%E3%83%8E%E5%86%85%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_4_0',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_coupon_4_0',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('nori_keiro_gourmet_4_0',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:00-07:02</b>
<br />
2分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr2.gif"  alt="地下鉄" />
</td>
<td class="rn" >
<div>東京メトロ丸ノ内線(池袋行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" >2・4号車</td>
<td id="bR4_0_fare" class="fr">
165円
</td>
<td id="bR4_0_fee" class="st">
</td>
<td class="km" >
1.8km
</td></tr>
<tr class="eki">
<td class="tm">
（6分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>池袋</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>1･2番線着</div>
<div>6番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%B1%A0%E8%A2%8B_%E5%B1%B1%E6%89%8B%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=8" onclick="j_cc('nori_keiro_time_4_1',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%B1%A0%E8%A2%8B_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_4_1',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','池袋','n_kp4_1');" onclick="j_cc('nori_keiro_rosenzu_4_1',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%B1%A0%E8%A2%8B_map.html" onclick="j_cc('nori_keiro_map_4_1',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%B1%A0%E8%A2%8B_shisetsu.html?rnm=%E5%B1%B1%E6%89%8B%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_4_1',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%B1%A0%E8%A2%8B.html" onclick="j_cc('nori_keiro_coupon_4_1',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%B1%A0%E8%A2%8B.html" onclick="j_cc('nori_keiro_gourmet_4_1',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:08-07:24</b>
<br />
16分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr0.gif"  alt="ＪＲ" />
</td>
<td class="rn" >
<div>山手線新宿方面行</div>
</td>
<td class="pp" >
</td>
<td class="ph" >6・8号車</td>
<td id="bR4_1_fare" class="fr">
165円
</td>
<td id="bR4_1_fee" class="st">
</td>
<td class="km" >
8.2km
</td></tr>
<tr class="eki">
<td class="tm">
（9分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>渋谷</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>2番線着</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%B8%8B%E8%B0%B7_%E6%9D%B1%E6%80%A5%E6%9D%B1%E6%A8%AA%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=7&Dmn=33" onclick="j_cc('nori_keiro_time_4_2',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%B8%8B%E8%B0%B7_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_4_2',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','渋谷','n_kp4_2');" onclick="j_cc('nori_keiro_rosenzu_4_2',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%B8%8B%E8%B0%B7_map.html" onclick="j_cc('nori_keiro_map_4_2',this)" target="_blank">地図</a>
<br />
<a class="shisetsu" href="/eki/eki_%E6%B8%8B%E8%B0%B7_shisetsu.html?rnm=%E6%9D%B1%E6%80%A5%E6%9D%B1%E6%A8%AA%E7%B7%9A" onclick="j_cc('nori_keiro_shisetsu_4_2',this)" target="_blank">トイレ</a>
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%B8%8B%E8%B0%B7.html" onclick="j_cc('nori_keiro_coupon_4_2',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%B8%8B%E8%B0%B7.html" onclick="j_cc('nori_keiro_gourmet_4_2',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>07:33-07:49</b>
<br />
16分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr1.gif"  alt="私鉄" />
</td>
<td class="rn" >
<div>東急東横線急行(元町・中華街行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" >やや後</td>
<td id="bR4_2_fare" class="fr">
195円
</td>
<td id="bR4_2_fee" class="st">
</td>
<td class="km" >
10.8km
</td></tr>
<tr class="eki">
<td class="tm">
（11分）
</td>
<td class="ln"><img src="/norikae/img/line_eki_s.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>武蔵小杉</strong>
</td>
<td class="pp"></td>
<td class="ph">
<div>1番線着</div>
<div>3番線発</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="time" href="/time/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89_%E6%A8%AA%E9%A0%88%E8%B3%80%E7%B7%9A.html?Dym=201706&Ddd=01&Dhh=8&Dmn=0" onclick="j_cc('nori_keiro_time_4_3',this)" target="_blank">時刻表</a>
<a class="kounai" href="/eki/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89_kounaizu.html" onclick="j_cc('nori_keiro_kounaizu_4_3',this)" target="_blank">構内図</a>
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','武蔵小杉','n_kp4_3');" onclick="j_cc('nori_keiro_rosenzu_4_3',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89_map.html" onclick="j_cc('nori_keiro_map_4_3',this)" target="_blank">地図</a>
<br />
<a class="coupon" href="http://cp.jorudan.co.jp/coupon/search/eki_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89.html" onclick="j_cc('nori_keiro_coupon_4_3',this)" target="_blank">クーポン</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%AD%A6%E8%94%B5%E5%B0%8F%E6%9D%89.html" onclick="j_cc('nori_keiro_gourmet_4_3',this)" target="_blank">グルメ</a>
</td></tr>
<tr class="rosen "><td class="tm" >
<b>08:00-08:03</b>
<br />
3分
</td>
<td class="ln" ></td>
<td class="gf" >
<img src="/norikae/img/nr0.gif"  alt="ＪＲ" />
</td>
<td class="rn" >
<div>横須賀線(久里浜行)</div>
</td>
<td class="pp" >
</td>
<td class="ph" ></td>
<td id="bR4_3_fare" class="fr">
133円
</td>
<td id="bR4_3_fee" class="st">
</td>
<td class="km" >
2.7km
</td></tr>
<tr class="eki eki_e">
<td class="tm">
<img class="tenki" src="/eki/img/tenki0.gif" alt="晴れ"  />
</td>
<td class="ln"><img src="/norikae/img/line_eki.gif" alt="" /></td>
<td class="nm" colspan="2"><strong>新川崎</strong></td>
<td class="pp"></td>
<td class="ph">
<div>2番線着</div>
</td>
<td colspan="3" class="nrk-route-tbl__ekilink">
<a class="rosenzu" href="javascript:JC.TR.disp(null,'s','新川崎','n_kp4_99');" onclick="j_cc('nori_keiro_rosenzu_4_99',this)" >路線図</a>
<a class="map" href="/eki/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E_map.html" onclick="j_cc('nori_keiro_map_4_99',this)" target="_blank">地図</a>
<br />
<a class="hotel" href="javascript:jrd_hotel_pop('新川崎','n_kp4_99','','201706',1);" onclick="j_cc('nori_keiro_hotel_4_99',this)" >ホテル</a>
<a class="gourmet" href="http://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('nori_keiro_gourmet_4_99',this)" target="_blank">グルメ</a>
</td></tr>
</table>
</div>
<div class="footer">
<div class="airlimit">空路有効期間：2017年5月1日-2017年6月30日</div>
<a href="#search" class="again">条件変更</a>
</div>
</div>
</div><!-- /results -->
<div id="id_nr_inform" class="nr_inform">
<dl>
<dt>記号の説明</dt>
<dd><b>△</b> … 前後の時刻表から計算した推定時刻です。</dd>
<dd><b>( )</b> … 徒歩/車を使用した場合の時刻です。</dd>
</dl>
</div><!-- /nr_inform -->
<form action="/norikae/cgi/nori.cgi" method="get" name="fm_nori" id="fm_nori" class="fmmd_Normal" >
<fieldset id="search">
<div class="header">
<div id="search_tab">
<a id="Stb0" class="on" href="/norikae/" onclick="return tabNrClick(0)" ><b>乗換案内 詳細検索</b></a>
<a id="Stb1" class="" href="/norikae/seishun18.html" onclick="return tabNrClick(1)" ><b>青春18きっぷ検索</b></a>
<a id="Stb3" class="" href="/norikae/zipang.html"  ><b>ジパング検索</b></a>
<a id="Stb20" class="" href="/norikae/teiki.html" onclick="return tabNrClick(20)" ><b>定期代検索</b></a>
</div>
</div>
<div class="body" id="search_body" >
<div id="search_msg" class="msg_red" style="display:none;" ></div>
<div class="fm1">
<table class="fmT1" >
<tr class="w_eki"><th><label for="eki1_in">出発地</label></th>
<td class="d1" ><div class="ekiin" style="z-index:202;" id="ekIn1" ><input type="text" id="eki1_in" name="eki1" value="新大塚" size="40" maxlength="200" tabindex="1"  onfocus="doDisp(this.id)" onblur="doHide(this.id)" onkeydown="doSelect(this.id,event)" onkeypress="return doInput(this.id,event)" placeholder=" 駅、スポット、バス停、住所" /><div class="pop" id="eki1_sg" ></div><span id="ekInR1" class="recBtn_off" onclick="recbtn1.disp(1,'ekIn1')" >履歴</span></div></td><td rowspan="2" class="d2"><script>document.write('<span id="chFromTo" >駅を入替</span>');</script></td><td rowspan="5" class="w_intool" >
<script type="text/javascript">nr_tool_btn();</script>
</td></tr>
<tr class="w_eki"><th><label for="eki2_in">到着地</label></th><td class="d1"><div class="ekiin" style="z-index:201;" id="ekIn2"><input type="text" id="eki2_in" name="eki2" value="新川崎" size="40" maxlength="200" tabindex="1"  onfocus="doDisp(this.id)" onblur="doHide(this.id)" onkeydown="doSelect(this.id,event)" onkeypress="return doInput(this.id,event)"  placeholder=" 駅、スポット、バス停、住所" /><div class="pop" id="eki2_sg"></div><span id="ekInR2" class="recBtn_off" onclick="recbtn2.disp(2,'ekIn2')" >履歴</span></div></td></tr><tr class="w_line" id="IdJkLine" ><th><label for="id_line_ckb">列車<span>/</span>便</label></th>
<td class="d1" colspan="2">
<input type="checkbox" name="Clid" id="id_line_ckb" value="" tabindex="" class="" onclick="use_linename(this.checked)" />
<label for="id_line_ckb" class="w_line_td_label" id="id_line_name" >
<strong>列車名</strong><br />YYYY年MM月DD日
</label>
<p class="search_msg_useline2">※バス停・港・スポットからの検索はできません。</p>
</td></tr>
<tr class="w_eki w_keiyu" id="IdJkKeiyu"><th><label for="eki3_in">経由駅</label></th><td class="d1">
<div class="ViaOp" id="ViaOpON" >
<div class="ekiin" style="z-index:109;" id="ekIn3" ><input type="text" id="eki3_in" name="eki3" value="" size="40" maxlength="200" tabindex="1"  onfocus="doDisp(this.id)" onblur="doHide(this.id)" onkeydown="doSelect(this.id,event)" onkeypress="return doInput(this.id,event)" placeholder=" 駅" /><div class="pop" id="eki3_sg"></div><span id="ekInR3" class="recBtn_off" onclick="recbtn3.disp(3,'ekIn3')" >履歴</span></div>
<input type="hidden" name="via_on" value="1" />
</div></td><td></td></tr>
<tr class="bdr"><td colspan="3"><!-- --></td></tr>
<tr class="w_date" id="IdJkDate1"><th rowspan="2" ><label for="Dym_slc">日時</label><a tabindex="1"></a></th>
<td class="d1" colspan="2">
<div style="float:left;">
<select id="Dym_slc" name="Dym" size="1" tabindex="2" >
<option value="201704">2017年4月</option>
<option value="201705">2017年5月</option>
<option value="201706" selected="selected">2017年6月</option>
<option value="201707">2017年7月</option>
<option value="201708">2017年8月</option>
<option value="201709">2017年9月</option>
<option value="201710">2017年10月</option>
<option value="201711">2017年11月</option>
<option value="201712">2017年12月</option>
<option value="201801">2018年1月</option>
<option value="201802">2018年2月</option>
<option value="201803">2018年3月</option>
<option value="201804">2018年4月</option>
<option value="201805">2018年5月</option>
</select>
<select id="Ddd_slc" name="Ddd" size="1" tabindex="2" >
<option value="1" selected="selected">1日</option><option value="2">2日</option><option value="3">3日</option><option value="4">4日</option><option value="5">5日</option><option value="6">6日</option><option value="7">7日</option><option value="8">8日</option><option value="9">9日</option><option value="10">10日</option><option value="11">11日</option><option value="12">12日</option><option value="13">13日</option><option value="14">14日</option><option value="15">15日</option><option value="16">16日</option><option value="17">17日</option><option value="18">18日</option><option value="19">19日</option><option value="20">20日</option><option value="21">21日</option><option value="22">22日</option><option value="23">23日</option><option value="24">24日</option><option value="25">25日</option><option value="26">26日</option><option value="27">27日</option><option value="28">28日</option><option value="29">29日</option><option value="30">30日</option><option value="31">31日</option>
</select>
<span id="slc_times" >&nbsp;<select id="Dhh_slc" name="Dhh" size="1" tabindex="2">
<option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7" selected="selected">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option>
</select><label for="Dhh_slc">時</label><select id="Dmn1_slc" name="Dmn1" size="1" tabindex="2">
<option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
</select><select id="Dmn2_slc" name="Dmn2" size="1" tabindex="2">
<option value="0" selected="selected">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option>
</select><label for="Dmn1_slc">分</label></span>
</div>
</td></tr>
<tr class="w_date2" id="IdJkDate2" ><td class="d1" colspan="2">
<span id="id_cway" >
<input type="radio" id="Cway0" name="Cway" value="0" tabindex="3" class="rd" checked="checked" /><label for="Cway0">出発</label>
<input type="radio" id="Cway1" name="Cway" value="1" tabindex="3" class="rd"  /><label for="Cway1">到着</label>
<input type="radio" id="Cway2" name="Cway" value="2" tabindex="3" class="rd"  /><label for="Cway2">始発</label>
<input type="radio" id="Cway3" name="Cway" value="3" tabindex="3" class="rd"  /><label for="Cway3">終電</label>
</span>
<span id="id_clate" ><input type="checkbox" name="Clate" id="Clate" value="1" tabindex="3" class="ckb"  /><label for="Clate">出来るだけ遅く出発する</label></span>
</td></tr>
<tr class="bdr"><td colspan="4"><!-- --></td></tr>
<tr class="w_ic" id="IdJkIc"><th>運賃</th><td class="d1" colspan="3">
<div style="float:left;">
<input type="radio" id="Cfp1" name="Cfp" value="1" tabindex="3" class="rd" checked="checked" /><label for="Cfp1">ICカード利用</label>
<input type="radio" id="Cfp2" name="Cfp" value="2" tabindex="3" class="rd"  /><label for="Cfp2">切符利用</label>
</div>
<div id="id_ctks" ><a class="to_lp" href="/nori_srvc/lp/free1.html?btn=nori" target="_blank" >定期を使う（無料）</a></div>
</td></tr>
<tr class="w_ic" id="IdJkZipangUntin"><th>割引</th><td class="d1" colspan="3">
<select id="Czu" name="Czu" size="1" tabindex="4" >
<option value="2" selected="selected">ジパング倶楽部</option>
<option value="1" >ジパング倶楽部[加入初年度3回まで]</option>
<option value="3" >大人の休日倶楽部ジパング</option>
<option value="4" >大人の休日倶楽部ミドル</option>
<option value="5" >おとなび</option>
<option value="6" >四国エンジョイクラブ</option>
</select>&nbsp;&nbsp;<a href="/info/help/nori_p_zipang.html#i_p_z_club" target="_blank">各会員クラブの説明</a>
</td></tr>
<tr class="bdr"><td colspan="4"><!-- --></td></tr>
<tr class="w_joken w_jk1" id="IdJk"><th>条件</th><td colspan="3" class="d1">
<span class="b1" id="IdJkB1" >
<div id="JKt1"><label for="C7">定期の種類</label><select id="C7" name="C7" size="1" tabindex="4" >
<option value="1" selected="selected">通勤</option>
<option value="2" >通学（大学生）</option>
<option value="3" >通学（高校生）</option>
<option value="4" >通学（中学生）</option>
</select></div>
<div id="JK2"><label for="C2">飛行機</label><select id="C2" name="C2" size="1" tabindex="4" >
<option value="0" selected="selected">おまかせ</option>
<option value="1" >使わない</option>
</select></div>
<div id="JK3"><label for="C3">高速バス</label><select id="C3" name="C3" size="1" tabindex="4" >
<option value="0" selected="selected">おまかせ</option>
<option value="1" >使わない</option>
</select></div>
<div id="JK1"><label for="C1">有料特急</label><select id="C1" name="C1" size="1" tabindex="4" >
<option value="0" selected="selected">おまかせ</option>
<option value="1" >使わない</option>
<option value="2" >100km以上なら使う</option>
</select>
<span class="exp_msg" >※「使わない」は、飛行機/バス/フェリーも利用しません。</span>
</div>
<div id="JKofk"><a href="/nori_srvc/lp/out4.html" target="_blank" class="to_lp">往復割引を利用する</a></div>
</span>
<span class="b2" id="IdJkB2" >
<div id="JK4"  ><label for="C4">優先座席</label><select id="C4" name="C4" size="1" tabindex="4" >
<option value="0" selected="selected">指定席</option>
<option value="1" >自由席</option>
<option value="2" >グリーン席</option>
</select></div>
<div id="JK6"><label for="C6">乗換時間</label><select id="C6" name="C6" size="1" tabindex="4" >
<option value="1" >短め</option>
<option value="2" selected="selected">標準</option>
<option value="3" >余裕を持つ</option>
</select></div>
</span>
</td></tr>
</table>
<div id="search_bottom_msg" style="display:none;"></div>
</div>
<div class="sbmt">
<input type="image" name="S" width="117" height="32" value="検索" alt="検索" src="/com/img/search/submit_n.png?20160225" tabindex="10" />
</div>
<input type="hidden" name="Cmap1" value="" />
<input type="hidden" name="rf" value="nr" />
<input type="hidden" name="pg" value="0" />
<input type="hidden" name="eok1" value="R-" />
<input type="hidden" name="eok2" value="R-" />
<input type="hidden" name="eok3" value="" />
<div class="hr"></div>
<div class="search_subop">
<div style="float:left;"></div>
<div style="float:right;">
<a id="rec_del" style="display:none;" href="javascript:JrT_Rec.delCkiEki();" >履歴削除</a>
<script>document.write('<span id="ck_sg">　</span>'); </script>
</div>
</div>
</div>
<div class="footer"></div>
</fieldset>
</form>
<form name="fm_ek" id="fm_ek">
<input type="hidden" name="ekaku1" value="新大塚" />
<input type="hidden" name="ekaku2" value="新川崎" />
<input type="hidden" name="ekaku3" value="" />
</form>
<div class="sp"><!-- --></div>
<div id="js_18k" style="display:none;" >
<h4 class="h_sc h_k18" ><b>青春18きっぷとは</b></h4>
<div class="section sc_k18">
<p>JR普通列車が乗り放題になる券が5回分入った、JRのお得な切符です。<br />１人で5回（5日）使ってもよし、5人で1日ぶらり途中下車の旅もよし。<br />のんびりとした旅が味わえます。<br />春・夏・冬の特定の期間でのみご購入が可能です。</p>
<ul>
<li>【春】発売期間：2月20日～3月31日　利用期間：3月1日～4月10日</li>
<li>【夏】発売期間：7月1日～8月31日　利用期間：7月20日～9月10日</li>
<li>【冬】発売期間：12月1日～12月31日　利用期間：12月10日～1月10日</li>
</ul><p>※上記期間はあくまで目安となります。</p>
</div>
</div><!-- /js_18k -->
<div class="sp0" style="height:10px;"></div>
<div id="Ads_google_bottom_1" ><!-- --></div>
<div id="Ads_google_bottom_2" ><!-- --></div>
<div class="sp0"><!-- --></div>
</div> <!-- left end -->
<div id="right"><!-- right -->
<!-- ### RIGHT_1_START ### -->
<!-- ### RIGHT_1_END ### -->
<div id="js_bnrR1"><!-- --></div>
<div id="Ads_google_right_1" ><!-- --></div>
<div id="areamatch-bimi"></div>
<script type="text/javascript" defer>(function(window){var dt = new Date();var h=Math.floor(dt.getTime() / 3600000);var d=window.document;var s=d.createElement('script');s.src='https://bimi.jorudan.co.jp/am/js/areamatch.js?h='+h;d.body.appendChild(s)})(window);</script>
<div id="js_bnrR1_1"><!-- --></div>
<h4 class="h_sc h_eki"><b><a target="_blank" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('right_eki_sogo_1',this)" class="blk">新大塚</a></b></h4>
<div class="section sc_eki2">
<div id="right_eki1_jrdnews" ><!----></div>
<ul class="gray sc_eki2__clm1" >
<li><a target="_blank" href="/time/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('right_eki_time_1',this)" >時刻表</a></li>
<li><a target="_blank" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_map.html" onclick="j_cc('right_eki_map_1',this)" >出口地図</a></li>
<li><a target="_blank" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_kounaizu.html" onclick="j_cc('right_eki_kounaizu_1',this)" >構内図</a></li>
<li class="orange"><a target="_blank" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('right_eki_sogo_1',this)" >駅情報</a></li>
</ul>
<ul class="gray sc_eki2__clm2">
<li><a target="_blank" href="https://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('right_eki_gourmet_1',this)" target="_blank">グルメ</a></li>
<li><a href="javascript:jrd_hotel_pop('新大塚','n_rp1','','201706',1);" onclick="j_cc('right_eki_hotel_1',this)" >ホテル</a></li>
<li><a target="_blank" href="/eki/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A_shisetsu.html" onclick="j_cc('right_eki_shisetsu_1',this)" >トイレ</a></li>
</ul>
<ul class="gray sc_eki2__clm3">
<li><a target="_blank" href="https://cp.jorudan.co.jp/coupon/search/eki_%E6%96%B0%E5%A4%A7%E5%A1%9A.html" onclick="j_cc('right_eki_coupon_1',this)"  >クーポン</a></li>
</ul>
<ul class="gray sc_eki2__tabirai">
<li><a target="_blank" href="https://mb.jorudan.co.jp/cmn/link2.cgi?cmd=tabirai&enc=utf8&e=%E6%96%B0%E5%A4%A7%E5%A1%9A">レンタカー<img src="/norikae/img/tabirai_logo_45_20.png"></a></li>
</ul>
</div><!-- /sc_eki2 -->
<!-- ### RIGHT_1_5_START ### -->
<div id="jrd_news2_r"><h4 class="h_sc"><b>ジョルダンニュース!</b></h4>
<div class="sc_news2">
<div class="section" id="jrd_news2_r_feed">
<div id="news2_r_topart">
<a href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1496218014184" target="_blank"><img src="/com/img/jrd_news/jrd_news_JD1496218014184.jpg?201706012214" alt="ＪＲ西日本、京都駅の「瑞風ラウンジ」公開" class="thmb" ></a>
<div id="title"><a href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1496218014184" target="_blank" class="sc_news_topart_title">ＪＲ西日本、京都駅の「瑞風ラウンジ」公開</a></div>
</div>
<div class="news2_r_rssBody">
<ul id="news2_r-t" class="news-item">
<li class="rssRow odd"><a target="_blank" href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1496294893916" target="_blank" >京都丹後鉄道、農産物の「貨客混載」開始　道の駅へ出荷</a></li>
<li class="rssRow odd"><a target="_blank" href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1495966495403" target="_blank" >川口市から京急へ　昭和の名車「デハ230形」引き継ぎ</a></li>
<li class="rssRow odd"><a target="_blank" href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JJ17053100324" target="_blank" >反対派「団結小屋」撤去＝跡地は誘導路に－成田空港</a></li>
<li class="rssRow odd"><a target="_blank" href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1495555380782" target="_blank" >京急「デハ230形」が里帰り　川口市から陸送、復元・保存へ</a></li>
<li class="rssRow odd"><a target="_blank" href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1495684440384" target="_blank" >新幹線の「先頭車研ぎロボ」実演も　ＪＲ東海、７月に浜松工場を一般公開</a></li>
<li class="rssRow odd"><a target="_blank" href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1495585639327" target="_blank" >「キツネ１匹で涙」　ＡＩＲＤＯ協賛の映画「生きとし生けるもの」</a></li>
<li class="rssRow odd"><a target="_blank" href="http://news.jorudan.co.jp/docs/news/detail.cgi?newsid=JD1495250969147" target="_blank" >しなの鉄道に「湘南色」再び　「懐かしの車体カラー」第２弾</a></li>
<li class="more"><a class="more" href="http://news.jorudan.co.jp/docs/news/">もっと見る</a></li>
</ul>
</div>
</div>
</div>
</div>
<div id="js_bnrR1_5"><!-- --></div>
<!-- ### RIGHT_1_5_END ### -->
<h4 class="h_sc h_eki"><b><a target="_blank" href="/eki/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('right_eki_sogo_2',this)" class="blk">新川崎</a></b></h4>
<div class="section sc_eki2">
<div id="right_eki2_jrdnews" ><!----></div>
<ul class="gray sc_eki2__clm1" >
<li><a target="_blank" href="/time/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('right_eki_time_2',this)" >時刻表</a></li>
<li><a target="_blank" href="/eki/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E_map.html" onclick="j_cc('right_eki_map_2',this)" >出口地図</a></li>
<li class="orange"><a target="_blank" href="/eki/eki_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('right_eki_sogo_2',this)" >駅情報</a></li>
</ul>
<ul class="gray sc_eki2__clm2">
<li><a target="_blank" href="https://bimi.jorudan.co.jp/station/shop_%E6%96%B0%E5%B7%9D%E5%B4%8E.html" onclick="j_cc('right_eki_gourmet_2',this)" target="_blank">グルメ</a></li>
<li><a href="javascript:jrd_hotel_pop('新川崎','n_rp2','','201706',1);" onclick="j_cc('right_eki_hotel_2',this)" >ホテル</a></li>
</ul>
<ul class="gray sc_eki2__clm3">
</ul>
<ul class="gray sc_eki2__tabirai">
<li><a target="_blank" href="https://mb.jorudan.co.jp/cmn/link2.cgi?cmd=tabirai&enc=utf8&e=%E6%96%B0%E5%B7%9D%E5%B4%8E">レンタカー<img src="/norikae/img/tabirai_logo_45_20.png"></a></li>
</ul>
</div><!-- /sc_eki2 -->
<div class="ads_rosen"><script type="text/javascript" src="/ads/cgi/ads_r.cgi?1=1&r=%C5%EC%B5%FE%A5%E1%A5%C8%A5%ED%B4%DD%A5%CE%C6%E2%C0%FE"></script></div>
<div id="Ads_google_right_2" ><!-- --></div>
<div id="js_bnrR2"><!-- --></div>
<div id="js_bnrR3"><!-- --></div>
<h4 class="h_sc h_3r"><b>乗換案内に関するお知らせ</b></h4>
<div style="padding: 3px 10px; border-right: 1px solid rgb(170, 170, 170); border-bottom: 1px solid rgb(170, 170, 170); border-left: 1px solid rgb(170, 170, 170); margin-bottom: 10px;"><ul><li style="margin-bottom: 5px; border-bottom: 1px dotted rgb(119, 136, 153);"><a href="/bus/rosen/" >路線バス［佐賀県］佐賀市営バス追加</a><span style="margin-left: 7px; font-size: 85%; text-align: right; color: rgb(102, 102, 102);">[2017/04/03]</span></li><li style="margin-bottom: 5px; border-bottom: 1px dotted rgb(119, 136, 153);"><a href="/bus/rosen/" >路線バス［長野県］小海町コミュニティなど2社追加</a><span style="margin-left: 7px; font-size: 85%; text-align: right; color: rgb(102, 102, 102);">[2017/03/29]</span></li><li style="text-align: right;"><a href="/nori_srvc/news_2017.html" class="more">一覧へ</a></li></ul></div>
<h4 class="h_sc h_3r"><b>ダイヤ改正対応履歴</b></h4>
<div style="padding: 3px 10px; border-right: 1px solid rgb(170, 170, 170); border-bottom: 1px solid rgb(170, 170, 170); border-left: 1px solid rgb(170, 170, 170); margin-bottom: 10px;"><ul><li><a href="/diagram/index.html?txt=nRight">通常ダイヤ</a></li><!--li><a href="/unk/#kouji_top"><b>熊本地震による交通への影響・対応状況について</b></a></li><li><a href="/info/haru/?txt=nRight" target="_blank"><b>春のダイヤ改正情報</b></a></li><li><a href="/info/haru/index.html?txt=nRight#Bus" target="_blank"><b>バスのダイヤ改正に関して</b></a></li><li><a href="/info/oomisoka/?txt=nRight" target="_blank"><b>大晦日終夜運転･年末年始ダイヤ情報</b></a></li--></ul></div>
<a href="https://at.jorudan.co.jp/lcc/?sitein=bnr_hp_side" class="bnr" target="_blank" ><img src="/com/img/bnr/w300_lcc_20170309.png" alt="LCCサポート LCCのフライトを検索ができます。経路検索と連携開始！"></a>
<a href="https://cp.jorudan.co.jp/?sitein=bnr_nRight" target="_blank" class="bnr"><img src="/com/img/bnr/w300_cp.gif" alt="ジョルダンクーポン"></a>
<a href="https://bimi.jorudan.co.jp/shinjuku/?ntl=sg_2" target="_blank" class="bnr"><img src="/com/img/bnr/w300_bimi_shinjuku_20160627.jpg" alt="新宿ごはん - 美味案内 新宿の人気メニューやランチ、TOPICSをご紹介。"></a>
<style type="text/css">
<!--
#toMobile{position: relative;margin:0 0;background-image:url(/com/img/bnr/w300_tomobile.png);background-repeat:no-repeat;width: 300px;height:320px;}
#toMobile p{text-indent: -9999px;}
#toMobile a.iphone{display: block;position: absolute;top: 85px;left: 140px;width: 120px;height: 30px;}
#toMobile a.android{display: block;position: absolute;top: 120px;left: 140px;width: 120px;height: 30px;}
#toMobile a.next{display: block;position: absolute;top: 230px;left: 125px;width: 150px;height: 37px;}
-->
</style>
<div id="toMobile">
<div class="toMobileLeft">
<p class="alpha"><a href="http://www.jorudan.co.jp/iphone/norikae/?btn=r" target="_blank"  title="乗換案内 for iPhone/iPad/iPod touch" class="iphone"><span>乗換案内 for iPhone/iPad/iPod touch</span></a></p>
<p class="alpha"><a href="http://www.jorudan.co.jp/android/norikae/?btn=r" target="_blank"  title="乗換案内 for Android" class="android"><span>乗換案内 for Android</span></a></p>
</div>
<div class="toMobileLeft">
<p class="alpha"><a href="https://mb.jorudan.co.jp/os/norikae.cgi" target="_blank"  title="乗換案内NEXT" class="next"><span>乗換案内NEXT</span></a></p>
</div>
</div>
<div class="sp" style="height: 5px;"></div>
</div><!-- right end -->
</div><!-- /contents -->
</div><!-- /contents_out -->
</div><!-- /container -->
<div class="footer_in">
<div class="to_top"><a href="#container">このページの先頭へ</a></div>
</div>
<div id="footer" >
<div class="footer_in">
<ul class="footer_u1" >
<li class="ftr_l"><h5><a href="/norikae/" >乗換案内</a></h5></li>
<li><a href="/norikae/" >乗換案内</a></li>
<li><a href="/norikae/seishun18.html" >青春18きっぷ検索</a></li>
<li><a href="/norikae/zipang.html" >ジパング検索</a></li>
<li><a href="/norikae/teiki.html" >定期代検索</a></li>
<li>　</li>
<li class="ftr_l"><h5><a href="/time/" >時刻表</a></h5></li>
<li><a href="/time/" >駅・フェリー時刻表</a></li>
<li><a href="/time/shinkansen.html" >新幹線時刻表</a></li>
<li><a href="/time/air.html" >空路時刻表</a></li>
<li>　</li>
<li class="ftr_l"><h5><a href="/bus/" >バス</a></h5></li>
<li><a href="/bus/rosen/" >路線バス時刻表</a></li>
<li><a href="/bus/highway/" >高速バス時刻表</a></li>
<li><a href="/bus/airport/" >空港バス時刻表</a></li>
<li><a href="/bus/midnight/" >深夜バス時刻表</a></li>
<li>　</li>
<li class="ftr_l"><h5><a href="/unk/" >運行情報</a></h5></li>
<li><a href="/unk/" >運行情報</a></li>
<li><a href="/unk/live.html" >ジョルダンライブ!</a></li>
<li>　</li>
<li class="ftr_l"><h5><a href="/diagram/" >ダイヤ</a></h5></li>
<li><a href="/diagram/" >通常ダイヤ</a></li>
<!--li><a href="/info/haru/" target="_blank">春のダイヤ改正情報</a></li-->
<!--li><a href="/info/oomisoka/" target="_blank">年末年始ダイヤ</a></li-->
<!--li><a href="/info/haru/hokkaido_shinkansen.html" target="_blank">北海道新幹線開業</a></li-->
</ul>
<ul class="footer_u2" >
<li class="ftr_l"><h5><a href="/eki/" >駅の情報</a></h5></li>
<li><a href="/eki/" >駅総合情報</a></li>
<li><a href="/eki/kounaizu.html">構内図</a></li>
<li><a href="/eki/map.html">出口・地図</a></li>
<li><a href="/eki/hotel.html">ホテル</a></li>
<li><a href="https://bimi.jorudan.co.jp/" target="_blank" >グルメ</a></li>
<li><a href="/eki/ranking.html">行き先ランキング</a></li>
<li>　</li>
<li class="ftr_l"><h5><a href="http://world.jorudan.co.jp/adv/metro/?af=0" >海外乗換案内</a></h5></li>
<li><a href="http://world.jorudan.co.jp/adv/metro/?af=0" >海外地下鉄案内</a></li>
<li><a href="http://world.jorudan.co.jp/adv/airline/?af=0" >海外空路検索</a></li>
<li>　</li>
<li class="ftr_l"><h5>特集</h5></li>
<li><a href="https://sp.jorudan.co.jp/hanami/" target="_blank">花見</a></li>
<li><a href="https://sp.jorudan.co.jp/hanabi/" target="_blank">花火大会</a></li>
<li><a href="https://sp.jorudan.co.jp/leaf/" target="_blank">紅葉</a></li>
<li><a href="https://sp.jorudan.co.jp/illumi/" target="_blank">イルミネーション</a></li>
<li><a href="https://sp.jorudan.co.jp/newyear/" target="_blank">初詣</a></li>
<li><a href="https://sp.jorudan.co.jp/zoo_aqua/" target="_blank">動物園・水族館</a></li>
<li><a href="https://next.jorudan.co.jp/ekiben/" target="_blank">駅弁情報</a></li>
<li>　</li>
<li class="ftr_l"><h5>トラベル</h5></li>
<li><a href="https://travel.jorudan.co.jp/" target="_blank" >ジョルダントラベル</a></li>
<li><a href="http://www.etour.co.jp/" target="_blank" >海外格安航空券</a></li>
<li><a href="https://at.jorudan.co.jp/lcc/?sitein=txt_footer" target="_blank">国内LCC</a></li>
<li><a href="https://next.jorudan.co.jp/trv/" target="_blank" >旅の思い出</a></li>
<li><a href="https://cp.jorudan.co.jp/" target="_blank" >ジョルダンクーポン</a></li>
</ul>
<ul class="footer_u3" >
<li class="ftr_l"><h5><a href="https://www.jorudan.co.jp/webuser/login.cgi" >乗換案内PREMIUM</a></h5></li>
<li><a href="/info/news/" >サービス詳細</a></li>
<li><a href="https://www.jorudan.co.jp/webuser/login.cgi" >ログイン</a></li>
<li><a href="https://www.jorudan.co.jp/webuser/regist.cgi" >新規会員登録</a></li>
<li>　</li>
<li class="ftr_l"><h5><a href="https://world.jorudan.co.jp/mln/en/?sub_lang=ja" target="_blank">Japan Transit Planner</a></h5></li>
<li><a href="https://world.jorudan.co.jp/mln/en/" target="_blank">English</a></li>
<li><a href="https://world.jorudan.co.jp/mln/zh-cn/" target="_blank">簡体中文</a></li>
<li><a href="https://world.jorudan.co.jp/mln/zh-tw/" target="_blank">繁体中文</a></li>
<li><a href="https://world.jorudan.co.jp/mln/ko/" target="_blank">韓国語</a></li>
<li>　</li>
<li class="ftr_l"><h5>ジョルダンサービス</h5></li>
<li><a href="http://news.jorudan.co.jp/" target="_blank">ジョルダンニュース!</a></li>
<li><a href="http://chat-j.jp/" target="_blank">ジョルダンチャットβ</a></li>
<li><a href="http://note-j.jp/" target="_blank">ジョルダンノート</a></li>
<li><a href="https://bimi.jorudan.co.jp/" target="_blank" >美味案内</a></li>
<li><a href="https://bimi.jorudan.co.jp/shinjuku/" target="_blank">新宿ごはん</a></li>
<li><a href="https://movie.jorudan.co.jp/" target="_blank" >映画の時間</a></li>
<!--li><a href="http://book.jorudan.co.jp/" target="_blank" >読書の時間</a></li-->
<li><a href="http://www.goku-books.jp/" target="_blank" >悟空出版</a></li>
<li><a href="http://school.jorudan.co.jp/" target="_blank" >ジョルダンスクール</a></li>
<!--li><a href="https://www.jorudan.co.jp/furusato/?sitein=txt_footer" target="_blank" >ふるさと納税</a></li-->
<!--li><a href="http://school.jorudan.co.jp/eigolike/" target="_blank" >英語いいね！</a></li-->
<li>　</li>
<li class="ftr_l"><h5>モバイルで乗換案内</h5></li>
<li><a href="https://mb.jorudan.co.jp/os/norikae.cgi" target="_blank" >乗換案内NEXT</a></li>
<li><a href="/mobile/keitai_info.html" target="_blank" >ケータイ版乗換案内</a></li>
<li><a href="/iphone/norikae/" target="_blank" >乗換案内 for iPhone/iPad/iPod touch［アプリ］</a></li>
<li><a href="/android/norikae/" target="_blank" >乗換案内 for Android［アプリ］</a></li>
</ul>
<ul class="footer_u4" >
<li class="ftr_l"><h5>サポート</h5></li>
<li><a href="/info/terms.html"  >ご利用にあたって</a></li>
<li><a href="/info/support.html"  >お問い合わせ</a></li>
<li><a href="/info/">ヘルプ/FAQ</a></li>
<li><a href="/info/ad-optout.html#ad_no">広告を非表示にするには</a></li>
<li><a href="/info/ad-optout.html#ad_optout">ターゲティング広告の無効化について</a></li>
<li><a href="/info/about_link.html">リンクについて</a></li>
<li><a href="/info/sitemap.html">サイトマップ</a></li>
<li>　</li>
<li class="ftr_l"><h5><a href="/company/" target="_blank" >会社情報</a></h5></li>
<li><a href="/company/" target="_blank" >会社案内</a></li>
<li><a href="/company/english/" target="_blank" >About Company</a></li>
<li><a href="/ir/" target="_blank" >投資家情報</a></li>
<li><a href="/products/">製品案内</a></li>
<li><a href="/company/data/employment.html" target="_blank" >採用情報</a></li>
<li><a href="/company/privacy.html" target="_blank" >プライバシーポリシー</a></li>
<li><a href="/company/security.html" target="_blank" >情報セキュリティー</a></li>
<li>　</li>
<li class="ftr_l"><h5>法人サービス</h5></li>
<li><a href="http://biz.jorudan.co.jp/" target="_blank" >乗換案内Biz</a></li>
<li><a href="https://remunera-jorudan.co.jp/" target="_blank" >福利厚生サービス</a></li>
<li><a href="/info/ad.html">広告掲載について</a></li>
</ul>
<ul class="footer_u5" >
<li class="ftr_l"><h5>提携サイト</h5></li>
<li><a href="http://www.travel.co.jp/stay/" target="_blank" >格安旅行の検索・比較 Travel.jp</a></li>
</ul>
<p class="mb">
<img src="/com/img/bnr/qr_jm.gif" alt="ジョルダンモバイル" class="left" width="68" height="68" />
ジョルダンのサイトを携帯で！<br />
乗換案内、映画情報、季節情報...あなたのおでかけをサポート！
<b>http://www.jorudan.co.jp/jm/</b>
</p>
<iframe src="/jt/cgi/goiken/g.cgi?w=300&bg=eeeeee" frameborder="0" scrolling="no"  name="sample" width="300" height="165"></iframe>
</div><!-- /footer_in -->
</div><!-- /footer -->
<div id="footer_bottom">
<div class="footer_in">
<p id="copy">Copyright &copy; 1996<script type="text/javascript">document.write("-"+new Date().getFullYear());</script> Jorudan Co.,Ltd. All Rights Reserved</p>
<p id="copy_jr">※交承:平成25年53号　※JTB承:03-01</p>
</div>
</div>
<div id="RecBox" style="display:none;" ><form name="fmRec"></form></div>
<div id="Tool" style="display:none;" ><div id="ToolBg"><div class="min"><!-- --></div></div>
<div id="bk_AMp" class="win" style="display:none;" >
<div class="header"><h3>Myポイントに登録</h3><input type="button" value="　閉じる　" onclick="JC.Tool.hide()" /></div>
<div class="body">
<span class="msg_exp" >登録した発着地は、検索フォームから呼び出すことができます。<br />また、モバイルの乗換案内サービスと情報を共有できます。 <!--a href="test" target="_blank" >詳しい説明...</a--></span>
<span class="msg_err" id="bk_AMpMsg"></span>
<div id="bk_AMpM" >
<div class="Ad_noscl"><form name="fmAMp_add"></form></div>
<div class="Ad_sbm"><a href="/mypage/point.html">&gt;&gt;Myポイントの編集</a></div>
</div><!-- bk_AMp end -->
</div>
</div><!-- bk_AMp -->
<div id="bk_AMr" class="win" style="display:none;" >
<div class="header"><h3>Myルートに登録</h3><input type="button" value="　閉じる　" onclick="JC.Tool.hide()" /></div>
<div class="body">
<span class="msg_exp" >登録した経路は、検索フォームから呼び出すことができます。<br />また、モバイルの乗換案内サービスと情報を共有できます。 <!--a href="test" target="_blank" >詳しい説明...</a--></span>
<span class="msg_err" id="bk_AMrMsg"></span>
<div id="bk_AMrM" >
<div class="Ad_noscl"><form name="fmAMr_add"></form></div>
<div class="Ad_sbm"><a href="/mypage/route.html">&gt;&gt;Myルートの編集</a></div>
</div><!-- bk_AMr end -->
</div>
</div><!-- bk_AMr -->
</div>
</body>
</html>`
