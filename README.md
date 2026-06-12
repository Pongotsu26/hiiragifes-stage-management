# hiiragifes-stage-management

**Firebase** を使用したリアルタイムデータ同期機能を備えた Next.js アプリケーションです。75,76th柊祭開会式/後夜祭運営のために開発されました。

## 🔥 Firebase 連携

このプロジェクトは **Firebase** を使用しています：

- **Realtime Database**: ユーザー情報、キュー情報の保存と同期
- **リアルタイム通信**: 複数ユーザー間での状態管理とメッセージ配信

Firebase 設定は `lib/database.tsx` で管理されています。

## 🚀 使い方

### 前提条件

- Node.js 18 以上
- pnpm パッケージマネージャー
- Firebase プロジェクト設定

### インストール

```bash
# 依存関係をインストール
pnpm install
```

### 開発サーバーの起動

```bash
# 通常の開発サーバー
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションにアクセスできます。

**HTTPS での起動** (必要に応じて):
```bash
pnpm devHttps
```

### ビルドと本番環境での実行

```bash
# ビルド
pnpm build

# 本番環境で起動
pnpm start
```

### linting

```bash
pnpm lint
```

## 📁 プロジェクト構成

```
src/
├── app/              # Next.js App Router ページ
│   ├── page.tsx     # メインページ
│   ├── layout.tsx   # ルートレイアウト
│   └── ...          # 機能別ページ
├── components/       # React コンポーネント
├── lib/             # ユーティリティ関数
│   └── database.tsx # Firebase 設定・管理
├── styles/          # スタイルシート
└── public/          # 静的ファイル
```

## 🛠️ 主な依存関係

- **Next.js 15.4**: React フレームワーク
- **React 19**: UI ライブラリ
- **Firebase 12**: リアルタイムデータベース・通信
- **TypeScript**: 型安全性

## 📝 環境設定

Firebase の認証情報を環境変数で設定してください：

```bash
# .env.local ファイルを作成
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx
```

## 📚 参考リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Firebase ドキュメント](https://firebase.google.com/docs)
- [WebRTC](https://webrtc.org/)

## 🚢 デプロイ

Vercel での最簡単なデプロイ方法：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

または、`next build` と `next start` で本番環境をビルドして実行してください。
