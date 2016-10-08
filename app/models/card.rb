class Card < ApplicationRecord
  has_many :card_members
  has_many :members, through: :card_members
  belongs_to :list
end
