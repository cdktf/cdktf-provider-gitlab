/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PersonalAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the token will expire, YYYY-MM-DD format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token#expires_at PersonalAccessToken#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The name of the personal access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token#name PersonalAccessToken#name}
  */
  readonly name: string;
  /**
  * The scopes of the personal access token. valid values are: `api`, `read_user`, `read_api`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `sudo`, `admin_mode`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `read_service_ping`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token#scopes PersonalAccessToken#scopes}
  */
  readonly scopes: string[];
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token#user_id PersonalAccessToken#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token gitlab_personal_access_token}
*/
export class PersonalAccessToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_personal_access_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PersonalAccessToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PersonalAccessToken to import
  * @param importFromId The id of the existing PersonalAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PersonalAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_personal_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/personal_access_token gitlab_personal_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PersonalAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: PersonalAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_personal_access_token',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.4.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expiresAt = config.expiresAt;
    this._name = config.name;
    this._scopes = config.scopes;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // revoked - computed: true, optional: false, required: false
  public get revoked() {
    return this.getBooleanAttribute('revoked');
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
