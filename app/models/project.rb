class Project < ActiveRecord::Base
  enum status: [ :open, :todo, :in_progress, :pending_approval, :done ]
  has_many :links
  has_many :attachments

  mount_uploader :image, AttachmentUploader

  belongs_to :assignee, class_name: "User"
  belongs_to :owner, class_name: "User"

  has_many :children, class_name: "Project", foreign_key: "parent_id"
  belongs_to :parent, class_name: "Project", foreign_key: "parent_id"
end
