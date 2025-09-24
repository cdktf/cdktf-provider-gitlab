/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PersonalAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the personal access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#description PersonalAccessToken#description}
  */
  readonly description?: string;
  /**
  * When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#expires_at PersonalAccessToken#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The name of the personal access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#name PersonalAccessToken#name}
  */
  readonly name: string;
  /**
  * The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#rotation_configuration PersonalAccessToken#rotation_configuration}
  */
  readonly rotationConfiguration?: PersonalAccessTokenRotationConfiguration;
  /**
  * The scopes of the personal access token. valid values are: `api`, `read_user`, `read_api`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `read_virtual_registry`, `write_virtual_registry`, `sudo`, `admin_mode`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `self_rotate`, `read_service_ping`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#scopes PersonalAccessToken#scopes}
  */
  readonly scopes: string[];
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#user_id PersonalAccessToken#user_id}
  */
  readonly userId: number;
}
export interface PersonalAccessTokenRotationConfiguration {
  /**
  * The duration (in days) the new token should be valid for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#expiration_days PersonalAccessToken#expiration_days}
  */
  readonly expirationDays: number;
  /**
  * The duration (in days) before the expiration when the token should be rotated. As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#rotate_before_days PersonalAccessToken#rotate_before_days}
  */
  readonly rotateBeforeDays: number;
}

export function personalAccessTokenRotationConfigurationToTerraform(struct?: PersonalAccessTokenRotationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_days: cdktf.numberToTerraform(struct!.expirationDays),
    rotate_before_days: cdktf.numberToTerraform(struct!.rotateBeforeDays),
  }
}


export function personalAccessTokenRotationConfigurationToHclTerraform(struct?: PersonalAccessTokenRotationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_days: {
      value: cdktf.numberToHclTerraform(struct!.expirationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rotate_before_days: {
      value: cdktf.numberToHclTerraform(struct!.rotateBeforeDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PersonalAccessTokenRotationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PersonalAccessTokenRotationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDays = this._expirationDays;
    }
    if (this._rotateBeforeDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateBeforeDays = this._rotateBeforeDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersonalAccessTokenRotationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationDays = undefined;
      this._rotateBeforeDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationDays = value.expirationDays;
      this._rotateBeforeDays = value.rotateBeforeDays;
    }
  }

  // expiration_days - computed: false, optional: false, required: true
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // rotate_before_days - computed: false, optional: false, required: true
  private _rotateBeforeDays?: number; 
  public get rotateBeforeDays() {
    return this.getNumberAttribute('rotate_before_days');
  }
  public set rotateBeforeDays(value: number) {
    this._rotateBeforeDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateBeforeDaysInput() {
    return this._rotateBeforeDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token gitlab_personal_access_token}
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
  * @param importFromId The id of the existing PersonalAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PersonalAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_personal_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/personal_access_token gitlab_personal_access_token} Resource
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
        providerVersion: '18.4.1',
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
    this._description = config.description;
    this._expiresAt = config.expiresAt;
    this._name = config.name;
    this._rotationConfiguration.internalValue = config.rotationConfiguration;
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

  // description - computed: true, optional: true, required: false
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

  // rotation_configuration - computed: false, optional: true, required: false
  private _rotationConfiguration = new PersonalAccessTokenRotationConfigurationOutputReference(this, "rotation_configuration");
  public get rotationConfiguration() {
    return this._rotationConfiguration;
  }
  public putRotationConfiguration(value: PersonalAccessTokenRotationConfiguration) {
    this._rotationConfiguration.internalValue = value;
  }
  public resetRotationConfiguration() {
    this._rotationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationConfigurationInput() {
    return this._rotationConfiguration.internalValue;
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
      description: cdktf.stringToTerraform(this._description),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      name: cdktf.stringToTerraform(this._name),
      rotation_configuration: personalAccessTokenRotationConfigurationToTerraform(this._rotationConfiguration.internalValue),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      rotation_configuration: {
        value: personalAccessTokenRotationConfigurationToHclTerraform(this._rotationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PersonalAccessTokenRotationConfiguration",
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
