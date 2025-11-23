/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserImpersonationTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Expiration date of the impersonation token in ISO format (YYYY-MM-DD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token#expires_at UserImpersonationToken#expires_at}
  */
  readonly expiresAt: string;
  /**
  * The name of the impersonation token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token#name UserImpersonationToken#name}
  */
  readonly name: string;
  /**
  * Array of scopes of the impersonation token. valid values are: `api`, `read_user`, `read_api`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `read_virtual_registry`, `write_virtual_registry`, `sudo`, `admin_mode`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `self_rotate`, `read_service_ping`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token#scopes UserImpersonationToken#scopes}
  */
  readonly scopes: string[];
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token#user_id UserImpersonationToken#user_id}
  */
  readonly userId: number;
  /**
  * Wether to validate if the expiration date is in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token#validate_past_expiration_date UserImpersonationToken#validate_past_expiration_date}
  */
  readonly validatePastExpirationDate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token gitlab_user_impersonation_token}
*/
export class UserImpersonationToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_user_impersonation_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserImpersonationToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserImpersonationToken to import
  * @param importFromId The id of the existing UserImpersonationToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserImpersonationToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_user_impersonation_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/user_impersonation_token gitlab_user_impersonation_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserImpersonationTokenConfig
  */
  public constructor(scope: Construct, id: string, config: UserImpersonationTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_user_impersonation_token',
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
    this._expiresAt = config.expiresAt;
    this._name = config.name;
    this._scopes = config.scopes;
    this._userId = config.userId;
    this._validatePastExpirationDate = config.validatePastExpirationDate;
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

  // expires_at - computed: false, optional: false, required: true
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // impersonation - computed: true, optional: false, required: false
  public get impersonation() {
    return this.getBooleanAttribute('impersonation');
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

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getNumberAttribute('token_id');
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

  // validate_past_expiration_date - computed: true, optional: true, required: false
  private _validatePastExpirationDate?: boolean | cdktf.IResolvable; 
  public get validatePastExpirationDate() {
    return this.getBooleanAttribute('validate_past_expiration_date');
  }
  public set validatePastExpirationDate(value: boolean | cdktf.IResolvable) {
    this._validatePastExpirationDate = value;
  }
  public resetValidatePastExpirationDate() {
    this._validatePastExpirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePastExpirationDateInput() {
    return this._validatePastExpirationDate;
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
      validate_past_expiration_date: cdktf.booleanToTerraform(this._validatePastExpirationDate),
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
      validate_past_expiration_date: {
        value: cdktf.booleanToHclTerraform(this._validatePastExpirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
