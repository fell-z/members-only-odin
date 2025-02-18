class Post < ApplicationRecord
  validates :title, presence: true, length: { in: 3..20 }
  validates :body, presence: true, length: { maximum: 220 }

  belongs_to :user
end
