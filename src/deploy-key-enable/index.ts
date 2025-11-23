/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/deploy_key_enable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployKeyEnableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can deploy key push to the project's repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/deploy_key_enable#can_push DeployKeyEnable#can_push}
  */
  readonly canPush?: boolean | cdktf.IResolvable;
  /**
  * The Gitlab key id for the pre-existing deploy key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/deploy_key_enable#key_id DeployKeyEnable#key_id}
  */
  readonly keyId: string;
  /**
  * The name or id of the project to add the deploy key to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/deploy_key_enable#project DeployKeyEnable#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/deploy_key_enable gitlab_deploy_key_enable}
*/
export class DeployKeyEnable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_deploy_key_enable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeployKeyEnable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeployKeyEnable to import
  * @param importFromId The id of the existing DeployKeyEnable that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/deploy_key_enable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeployKeyEnable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_deploy_key_enable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/deploy_key_enable gitlab_deploy_key_enable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployKeyEnableConfig
  */
  public constructor(scope: Construct, id: string, config: DeployKeyEnableConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_deploy_key_enable',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.6.1',
        providerVersionConstraint: '~> 18.0'
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
    this._keyId = config.keyId;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_push - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_push: cdktf.booleanToTerraform(this._canPush),
      key_id: cdktf.stringToTerraform(this._keyId),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_push: {
        value: cdktf.booleanToHclTerraform(this._canPush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
