# 上传摄影作品

网站的「摄影作品 / Photography / 写真」已经可以展示图片。
目前没有放示例照片，等你选择作品后再上传。每张照片在三个语言版本里使用同一个图片文件。

## 第一步：准备照片

建议导出 JPEG 或 WebP，长边约 2000–3000 像素，尽量将单张文件控制在 1 MB 左右，便于手机浏览。
原始大文件可以自行保留。网页点击照片会在新标签页打开你上传的图片。

文件名建议使用英文小写、数字和短横线，例如 `2026-10-tokyo-evening.jpg`。

## 第二步：上传到 GitHub

1. 打开自己的主页仓库，确认当前分支为 `main`。
2. 进入 `assets/img/photography/`。
3. 点击 **Add file → Upload files**，拖入照片。
4. 点击 **Commit changes** 保存。

## 第三步：把照片加入作品列表

打开 `_data/photography.yml`，点击铅笔图标编辑。
第一次上传时，将 `photos: []` 替换为下面的结构，再改成自己的图片路径和文字：

```yaml
photos:
  - image: /assets/img/photography/2026-10-tokyo-evening.jpg
    title:
      ja: 東京の夕暮れ
      en: A Tokyo evening
      zh: 东京的傍晚
    alt:
      ja: 夕暮れの光に包まれた東京の街並み
      en: A Tokyo street in the evening light
      zh: 傍晚光线中的东京街景
    location: Tokyo, Japan
    date: "2026-10-19"
    caption:
      ja: 帰り道、少しだけ足を止めて。
      en: A brief pause on the way home.
      zh: 在回家的路上，停了一小会儿。
```

以上是说明用的文字示例，不会自动出现在作品页上。

- `image` 必须与实际上传的文件名完全一致，包括大小写和扩展名。
- `title` 是作品名；`alt` 是给屏幕阅读器和图片加载失败时使用的画面说明。
- `location`、`date`、`caption` 都可以不写。日期应为拍摄日期，不确定时直接省略。
- `ja` / `en` / `zh` 对应日文、英文和中文。可以先写中文，再让助手补齐翻译。
- 没有日英标题时会回退到已填写的英文或中文标题，不会因此隐藏照片。
- 多张作品按文件里的先后顺序显示。下一张从新的 `- image:` 开始，与第一张对齐。

填写完成后点击 **Commit changes**。

## 第四步：确认展示

在 **Actions → Deploy site** 等待部署成功，再打开网站的摄影作品页。
检查照片显示、三语标题和原图链接；如果没更新，可以刷新或稍等片刻。

## 以后如何更换或删除

- 换说明：修改 `_data/photography.yml` 中的文字。
- 换照片：上传新文件后修改对应 `image` 路径。
- 从页面移除：删掉这张作品的整个 `- image:` 条目及其下属文字。
- 调整顺序：移动整段条目。

不需要为每张照片创建新的网页，也不需要把同一张照片上传三次。
