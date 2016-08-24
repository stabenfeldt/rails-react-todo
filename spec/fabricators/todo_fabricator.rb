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

Fabricator(:todo) do
  text "MyText"
  user nil
end
