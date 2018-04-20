class User < ApplicationRecord
  has_many :interviews
  has_many :companies, through: :interviews
end
