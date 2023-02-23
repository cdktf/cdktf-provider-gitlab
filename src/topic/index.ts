// https://www.terraform.io/docs/providers/gitlab/r/topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * A local path to the avatar image to upload. **Note**: not available for imported resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/topic#avatar Topic#avatar}
  */
  readonly avatar?: string;
  /**
  * The hash of the avatar image. Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/topic#avatar_hash Topic#avatar_hash}
  */
  readonly avatarHash?: string;
  /**
  * A text describing the topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/topic#description Topic#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/topic#id Topic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The topic's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/topic#name Topic#name}
  */
  readonly name: string;
  /**
  * Empty the topics fields instead of deleting it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/topic#soft_destroy Topic#soft_destroy}
  */
  readonly softDestroy?: boolean | cdktf.IResolvable;
  /**
  * The topic's description. Requires at least GitLab 15.0 for which it's a required argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/topic#title Topic#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/topic gitlab_topic}
*/
export class Topic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/topic gitlab_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TopicConfig
  */
  public constructor(scope: Construct, id: string, config: TopicConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_topic',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.9.0',
        providerVersionConstraint: '~> 15.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avatar = config.avatar;
    this._avatarHash = config.avatarHash;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._softDestroy = config.softDestroy;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar - computed: false, optional: true, required: false
  private _avatar?: string; 
  public get avatar() {
    return this.getStringAttribute('avatar');
  }
  public set avatar(value: string) {
    this._avatar = value;
  }
  public resetAvatar() {
    this._avatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar;
  }

  // avatar_hash - computed: true, optional: true, required: false
  private _avatarHash?: string; 
  public get avatarHash() {
    return this.getStringAttribute('avatar_hash');
  }
  public set avatarHash(value: string) {
    this._avatarHash = value;
  }
  public resetAvatarHash() {
    this._avatarHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarHashInput() {
    return this._avatarHash;
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // soft_destroy - computed: false, optional: true, required: false
  private _softDestroy?: boolean | cdktf.IResolvable; 
  public get softDestroy() {
    return this.getBooleanAttribute('soft_destroy');
  }
  public set softDestroy(value: boolean | cdktf.IResolvable) {
    this._softDestroy = value;
  }
  public resetSoftDestroy() {
    this._softDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDestroyInput() {
    return this._softDestroy;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avatar: cdktf.stringToTerraform(this._avatar),
      avatar_hash: cdktf.stringToTerraform(this._avatarHash),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      soft_destroy: cdktf.booleanToTerraform(this._softDestroy),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
