# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  text       :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ApplicationRecord
  belongs_to :user

  validates :user, presence: true
  validates :text, presence: true
end
