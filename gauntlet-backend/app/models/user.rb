class User < ApplicationRecord
  has_secure_password

  has_many :interviews
  has_many :companies, through: :interviews
end
