class GroupPageController < ApplicationController
  def index
    @countries = Country.all
  end
end
