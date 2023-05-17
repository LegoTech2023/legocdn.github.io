const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{"name": "\u6211\u8bb0\u5f97", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6211\u8bb0\u5f97.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u82e5\u628a\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u82e5\u628a\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5728\u4f60\u7684\u8eab\u8fb9", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5728\u4f60\u7684\u8eab\u8fb9.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u628a\u56de\u5fc6\u62fc\u597d\u7ed9\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u628a\u56de\u5fc6\u62fc\u597d\u7ed9\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5bc2\u5bde\u70df\u706b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5bc2\u5bde\u70df\u706b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u552f\u4e00", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u552f\u4e00.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u8fd8\u662f\u4f1a\u60f3\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u8fd8\u662f\u4f1a\u60f3\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5c31\u8ba9\u8fd9\u5927\u96e8\u5168\u90fd\u843d\u4e0b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5c31\u8ba9\u8fd9\u5927\u96e8\u5168\u90fd\u843d\u4e0b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u82e6\u8336\u5b50", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u82e6\u8336\u5b50.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u54ea\u91cc\u90fd\u662f\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u54ea\u91cc\u90fd\u662f\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7231\u4eba\u9519\u8fc7", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7231\u4eba\u9519\u8fc7.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7f57\u751f\u95e8\uff08Follow\uff09", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7f57\u751f\u95e8\uff08Follow\uff09.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5e26\u6211\u53bb\u627e\u591c\u751f\u6d3b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5e26\u6211\u53bb\u627e\u591c\u751f\u6d3b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6b66\u5bb6\u57612021", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6b66\u5bb6\u57612021.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Slow Down", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Slow Down.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6c34\u661f\u8bb0", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6c34\u661f\u8bb0.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7ed9\u4f60\u4e00\u74f6\u9b54\u6cd5\u836f\u6c34", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7ed9\u4f60\u4e00\u74f6\u9b54\u6cd5\u836f\u6c34.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u518d\u89c1\u83ab\u59ae\u5361", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u518d\u89c1\u83ab\u59ae\u5361.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Letting Go", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Letting Go.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u8d77\u98ce\u4e86", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u8d77\u98ce\u4e86.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5fd8\u4e0d\u6389\u7684\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5fd8\u4e0d\u6389\u7684\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "11", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/11.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u4e94\u767e\u4e8c\u5341\u8d6b\u5179", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u4e94\u767e\u4e8c\u5341\u8d6b\u5179.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5c0f\u57ce\u590f\u5929", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5c0f\u57ce\u590f\u5929.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Letting Go", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Letting Go.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u591a\u8fdc\u90fd\u8981\u5728\u4e00\u8d77", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u591a\u8fdc\u90fd\u8981\u5728\u4e00\u8d77.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u518d\u7b49\u51ac\u5929(Memories)", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u518d\u7b49\u51ac\u5929(Memories).mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Empty Love", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Empty Love.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u665a\u98ce", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u665a\u98ce.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7ed9\u4f60\u5440\uff08\u53c8\u540d\uff1afor ya\uff09", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7ed9\u4f60\u5440\uff08\u53c8\u540d\uff1afor ya\uff09.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5012\u6570", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5012\u6570.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "STAY", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/STAY.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5b64\u52c7\u8005", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5b64\u52c7\u8005.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u662f\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u662f\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u865a\u5e7b\u4e0e\u73b0\u5b9e", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u865a\u5e7b\u4e0e\u73b0\u5b9e.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u81f4\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u81f4\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "golden hour", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/golden hour.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Shadow Of The Sun", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Shadow Of The Sun.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6211\u7684\u7f8e\u4e3dfeat.\u6d77\u6d0bBo", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6211\u7684\u7f8e\u4e3dfeat.\u6d77\u6d0bBo.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u90a3\u662f\u4f60\u79bb\u5f00\u4e86\u5317\u4eac\u7684\u751f\u6d3b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u90a3\u662f\u4f60\u79bb\u5f00\u4e86\u5317\u4eac\u7684\u751f\u6d3b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7fa4\u9752", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7fa4\u9752.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Wake (Live)", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Wake (Live).mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5f62\u5bb9", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5f62\u5bb9.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Normal No More", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Normal No More.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5931\u8bed\u8005", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5931\u8bed\u8005.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u4e88\u4f60", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u4e88\u4f60.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u665a\u98ce\u5fc3\u91cc\u5439", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u665a\u98ce\u5fc3\u91cc\u5439.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "MOM", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/MOM.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5fcf\u6094\u5f55", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5fcf\u6094\u5f55.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6d6a\u6f2b\u4e3b\u4e49", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6d6a\u6f2b\u4e3b\u4e49.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u603b\u6709\u4e00\u5929\u4f60\u4f1a\u51fa\u73b0\u5728\u6211\u8eab\u8fb9", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u603b\u6709\u4e00\u5929\u4f60\u4f1a\u51fa\u73b0\u5728\u6211\u8eab\u8fb9.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u521d\u604b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u521d\u604b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6c89\u6ca6\u4e0e\u9050\u60f3", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6c89\u6ca6\u4e0e\u9050\u60f3.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Daylight", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Daylight.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "So Far Away (Acoustic)", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/So Far Away (Acoustic).mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7ea2", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7ea2.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5982\u679c\u5462", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5982\u679c\u5462.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Bones", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Bones.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u8fd8\u662f\u5206\u5f00", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u8fd8\u662f\u5206\u5f00.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u4e4c\u4e91", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u4e4c\u4e91.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u590f\u591c\u6700\u540e\u7684\u70df\u706b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u590f\u591c\u6700\u540e\u7684\u70df\u706b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u4e0e\u6211\u65e0\u5173", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u4e0e\u6211\u65e0\u5173.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u665a\u5b89", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u665a\u5b89.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "But U", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/But U.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7279\u522b\u7684\u4eba", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7279\u522b\u7684\u4eba.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6f20\u6cb3\u821e\u5385\u00b72022", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6f20\u6cb3\u821e\u5385\u00b72022.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u72c2\u604b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u72c2\u604b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "In The Shadow Of The Sun", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/In The Shadow Of The Sun.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u9519\u4f4d\u65f6\u7a7a", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u9519\u4f4d\u65f6\u7a7a.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5371\u9669\u6d3e\u5bf9", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5371\u9669\u6d3e\u5bf9.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6eaf (Reverse)", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6eaf (Reverse).mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5929\u5916\u6765\u7269", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5929\u5916\u6765\u7269.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u68a6\u91cc\u82b1", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u68a6\u91cc\u82b1.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u4e09\u56fd\u604b", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u4e09\u56fd\u604b.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "The Best Of Me", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/The Best Of Me.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5931\u8bed\u8005", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5931\u8bed\u8005.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5bcc\u5a46KTV", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5bcc\u5a46KTV.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5220\u4e86\u5427", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5220\u4e86\u5427.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u547d\u8fd0", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u547d\u8fd0.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u9a97\u5b50", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u9a97\u5b50.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5148\u8bf4\u8c0e\u7684\u4eba", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5148\u8bf4\u8c0e\u7684\u4eba.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "So Far Away", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/So Far Away.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u51c4\u7f8e\u5730", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u51c4\u7f8e\u5730.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Love Is Gone (Acoustic)", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Love Is Gone (Acoustic).mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u6307\u7eb9", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u6307\u7eb9.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "1 AM", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/1 AM.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7b97\u4e86\u5427", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7b97\u4e86\u5427.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u60f3\u53bb\u6d77\u8fb9", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u60f3\u53bb\u6d77\u8fb9.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u518d\u89c1", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u518d\u89c1.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u60ac\u6eba", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u60ac\u6eba.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "100", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/100.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u7231\u4f3c\u6c34\u4ed9", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u7231\u4f3c\u6c34\u4ed9.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "BABYDOLL (Speed)", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/BABYDOLL (Speed).mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5453\u8bed", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5453\u8bed.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5e05\u7279\u65e5\u8bb0", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5e05\u7279\u65e5\u8bb0.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u661f\u8fb0\u5927\u6d77", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u661f\u8fb0\u5927\u6d77.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "Stay The Night", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/Stay The Night.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u4e0d\u5c06\u5c31", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u4e0d\u5c06\u5c31.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u4ed6\u53ea\u662f\u7ecf\u8fc7", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u4ed6\u53ea\u662f\u7ecf\u8fc7.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u70ed\u604b\u60c5\u8282", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u70ed\u604b\u60c5\u8282.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u5927\u7720 (\u5b8c\u6574\u7248)", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u5927\u7720 (\u5b8c\u6574\u7248).mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}, {"name": "\u50cf\u6211\u8fd9\u6837\u7684\u4eba", "artist": "\u672a\u77e5", "url": "https://cdn1.music.leishenzhifu.com/163/20230121/\u50cf\u6211\u8fd9\u6837\u7684\u4eba.mp3", "cover": "http://cdn1.legend-web.leishenzhifu.com/static/music/music.png", "theme": "#ebd0c2"}]
});