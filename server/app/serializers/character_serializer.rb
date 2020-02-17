class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :class_1, :class_2, :class_3, :level, :photo_url, :created_at, :updated_at,
             :hp, :alignment, :str, :dex, :con, :int, :wis, :cha, :armor_class, :speed,
             :proficiency

  belongs_to :user, key: :player
  
end
