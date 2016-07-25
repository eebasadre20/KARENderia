class Restaurant < ApplicationRecord
  has_many :comments

  def to_s
    name
  end
end
