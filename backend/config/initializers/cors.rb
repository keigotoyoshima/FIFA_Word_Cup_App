# CORS の設定ファイル

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '127.0.0.1:3000', 'localhost:3000'
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end

end
# origins (文字列 or 正規表現): どのオリジンを許可するか（APIをうつ側のドメイン）
# resource (文字列 or 正規表現): 許可したいリソースファイル
# methods (文字列 or Array or :any): 許可したいHTTPメソッド
# headers (文字列 or Array or :any): 許可したいHTTPヘッダー