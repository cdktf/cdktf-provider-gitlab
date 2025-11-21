/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow this deploy key to be used to push changes to the project. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key#can_push DeployKey#can_push}
  */
  readonly canPush?: boolean | cdktf.IResolvable;
  /**
  * Expiration date for the deploy key. Does not expire if no value is provided. Expected in RFC3339 format `(2019-03-15T08:00:00Z)`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key#expires_at DeployKey#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key#id DeployKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The public ssh key body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key#key DeployKey#key}
  */
  readonly key: string;
  /**
  * The name or id of the project to add the deploy key to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key#project DeployKey#project}
  */
  readonly project: string;
  /**
  * A title to describe the deploy key with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key#title DeployKey#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key gitlab_deploy_key}
*/
export class DeployKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_deploy_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeployKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeployKey to import
  * @param importFromId The id of the existing DeployKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeployKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_deploy_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/deploy_key gitlab_deploy_key} Resource
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
        providerVersion: '18.6.0',
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
    this._expiresAt = config.expiresAt;
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

  // deploy_key_id - computed: true, optional: false, required: false
  public get deployKeyId() {
    return this.getNumberAttribute('deploy_key_id');
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
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
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      project: cdktf.stringToTerraform(this._project),
      title: cdktf.stringToTerraform(this._title),
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
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
