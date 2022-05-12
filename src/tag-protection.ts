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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createAccessLevel = config.createAccessLevel;
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
  public get id() {
    return this.getStringAttribute('id');
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
      project: cdktf.stringToTerraform(this._project),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }
}
