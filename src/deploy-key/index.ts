/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow this deploy key to be used to push changes to the project. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key#can_push DeployKey#can_push}
  */
  readonly canPush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key#id DeployKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The public ssh key body.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key#key DeployKey#key}
  */
  readonly key: string;
  /**
  * The name or id of the project to add the deploy key to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key#project DeployKey#project}
  */
  readonly project: string;
  /**
  * A title to describe the deploy key with.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key#title DeployKey#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key gitlab_deploy_key}
*/
export class DeployKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_deploy_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/deploy_key gitlab_deploy_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DeployKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_deploy_key',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.11.0',
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
    this._canPush = config.canPush;
    this._id = config.id;
    this._key = config.key;
    this._project = config.project;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_push - computed: false, optional: true, required: false
  private _canPush?: boolean | cdktf.IResolvable; 
  public get canPush() {
    return this.getBooleanAttribute('can_push');
  }
  public set canPush(value: boolean | cdktf.IResolvable) {
    this._canPush = value;
  }
  public resetCanPush() {
    this._canPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canPushInput() {
    return this._canPush;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
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
      can_push: cdktf.booleanToTerraform(this._canPush),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      project: cdktf.stringToTerraform(this._project),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
