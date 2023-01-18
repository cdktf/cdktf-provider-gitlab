// https://www.terraform.io/docs/providers/gitlab/r/tag_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access levels which are allowed to create. Valid values are: `no one`, `developer`, `maintainer`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/tag_protection#create_access_level TagProtection#create_access_level}
  */
  readonly createAccessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/tag_protection#id TagProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/tag_protection#project TagProtection#project}
  */
  readonly project: string;
  /**
  * Name of the tag or wildcard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/tag_protection#tag TagProtection#tag}
  */
  readonly tag: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/tag_protection gitlab_tag_protection}
*/
export class TagProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_tag_protection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/tag_protection gitlab_tag_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: TagProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_tag_protection',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.7.1',
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
    this._createAccessLevel = config.createAccessLevel;
    this._id = config.id;
    this._project = config.project;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_access_level - computed: false, optional: false, required: true
  private _createAccessLevel?: string; 
  public get createAccessLevel() {
    return this.getStringAttribute('create_access_level');
  }
  public set createAccessLevel(value: string) {
    this._createAccessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createAccessLevelInput() {
    return this._createAccessLevel;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_access_level: cdktf.stringToTerraform(this._createAccessLevel),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }
}
