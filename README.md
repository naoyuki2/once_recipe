# アプリ名 「今日の一皿」

![opengraph-image](https://github.com/naoyuki2/once_recipe/assets/135786069/fc173412-cb60-47ba-a8c9-5721d837b63d)

# URL

### https://once-recipe.vercel.app/

# アプリの概要

- アクセスすると楽天レシピAPIから取得したレシピがランダムで表示される
- 次の日になると表示されるレシピが更新される
- １日に１レシピしか表示されない
- ログインすることによってレシピ保存機能が使えるようになり、保存したレシピを見返すことができる

# コンセプト

- つくるレシピがマンネリ化するのを防ぐためにいろいろなレシピとの出会いを提供する
- レシピのレパートリーを増やせる
- １日に１レシピしか表示しないためユーザーを迷わせない

# ターゲットユーザー

- 自炊をする人
- なんの料理をつくるか迷っている人

# ホーム

![home_once_recipe](https://github.com/naoyuki2/once_recipe/assets/135786069/077ce660-0aa8-4029-aac0-45790948e72a)

# ログイン & ログアウト

![loginout_once_recipe](https://github.com/naoyuki2/once_recipe/assets/135786069/a6d51451-1e1c-414b-9f20-06c4dae2fd52)

# 保存

![keep_once_recipe](https://github.com/naoyuki2/once_recipe/assets/135786069/c64adcce-6527-411b-b990-0785b489458e)

# 技術スタック

![今日の一皿：構成図 (4)](https://github.com/naoyuki2/once_recipe/assets/135786069/fb1e0ee3-ef88-4202-b526-bdaf4aba351e)

# ER図

![scheme](https://github.com/naoyuki2/once_recipe/assets/135786069/bc42683b-5498-4e0a-9d08-9c9a539d70cf)

# 成功した点

- 初めてGoogle認証をアプリに組み込むことができた
- Next.jsの機能であるISRを使用してアクセスを高速にすることができた

# 苦労した点

- Next.jsのキャッシュ機能はまだまだバグが多いらしく、ISRの実装がなかなかうまくいかなかった
- ローカルでは正常に動作するのに、デプロイでエラーが起きたり、本番環境で異常な動作が起きたこと
  - ドキュメントやGitHubのissue、技術記事などを見て、最終的には自己解決できた

# 改善したい点

- ISRで実装はしたが、１日たっても表示されるレシピが変更されないことがある
- UIをモバイルファーストで作成したため、PCサイズなどはレイアウトが少し崩れてしまう
- ローティングスケルトンがうまく作れず、レイアウトシフトが起こる
