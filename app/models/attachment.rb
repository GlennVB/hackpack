class Attachment < ActiveRecord::Base
  mount_uploader :original, AttachmentUploader
end
