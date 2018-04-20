class Interview < ApplicationRecord
  belongs_to :user
  belongs_to :company
  has_many :interactions
  has_many :algorithms
end
