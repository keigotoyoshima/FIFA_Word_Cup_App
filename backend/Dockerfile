FROM ruby:2.6.8

ENV BUNDLE_VERSION 2.3.17
ENV APP /usr/src/app

# netcat is for nc command
RUN apt-get update && apt-get install -y netcat
RUN apt-get install -y vim
# RUN gem install  --version "$BUNDLE_VERSION" 
# RUN gem install bundler:2.3.17

RUN mkdir $APP
WORKDIR $APP

COPY Gemfile* $APP/
# 新しいGemfileのgemがコンテナ内の/usr/local/bundleにinstallされる
# RUN bundle install
# docker-compose up でvolumeと紐付いたタイミングで/usr/local/bundleが古いvolumeに上書かれてしまう。そのため，docker-compose run backend bundle installでvolumeを更新する。

COPY . $APP/

CMD ["./bin/server-dev"]