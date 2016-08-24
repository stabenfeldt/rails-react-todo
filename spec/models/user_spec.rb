# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :text
#  email      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  before :each do
    @user = Fabricate(:user)
  end

  it 'is valid from the Fabric' do
    expect(@user).to be_valid
  end

  it 'has many todos' do
    @todo = @user.todos.new(text: 'Remember the milk' )
    @user.save
    @user.todos.size.should eq 1
  end
end
