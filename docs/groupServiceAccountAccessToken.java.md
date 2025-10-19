# `groupServiceAccountAccessToken` Submodule <a name="`groupServiceAccountAccessToken` Submodule" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupServiceAccountAccessToken <a name="GroupServiceAccountAccessToken" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token gitlab_group_service_account_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessToken;

GroupServiceAccountAccessToken.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .group(java.lang.String)
    .name(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .userId(java.lang.Number)
//  .expiresAt(java.lang.String)
//  .rotationConfiguration(GroupServiceAccountAccessTokenRotationConfiguration)
//  .validatePastExpirationDate(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the group containing the service account. Must be a top level group. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the personal access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The scopes of the group service account access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a service account user. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The service account access token expiry date. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.validatePastExpirationDate">validatePastExpirationDate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Wether to validate if the expiration date is in the future. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.group"></a>

- *Type:* java.lang.String

The ID or URL-encoded path of the group containing the service account. Must be a top level group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#group GroupServiceAccountAccessToken#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#name GroupServiceAccountAccessToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

The scopes of the group service account access token.

Valid values are: `api`, `read_user`, `read_api`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `read_virtual_registry`, `write_virtual_registry`, `sudo`, `admin_mode`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `self_rotate`, `read_service_ping`. If `self_rotate` is included, you must also provide either `expires_at` or `rotation_configuration`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#scopes GroupServiceAccountAccessToken#scopes}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.userId"></a>

- *Type:* java.lang.Number

The ID of a service account user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#user_id GroupServiceAccountAccessToken#user_id}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.expiresAt"></a>

- *Type:* java.lang.String

The service account access token expiry date.

When left blank, the token follows the standard rule of expiry for personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#expires_at GroupServiceAccountAccessToken#expires_at}

---

##### `rotationConfiguration`<sup>Optional</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.rotationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#rotation_configuration GroupServiceAccountAccessToken#rotation_configuration}

---

##### `validatePastExpirationDate`<sup>Optional</sup> <a name="validatePastExpirationDate" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.Initializer.parameter.validatePastExpirationDate"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Wether to validate if the expiration date is in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#validate_past_expiration_date GroupServiceAccountAccessToken#validate_past_expiration_date}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.putRotationConfiguration">putRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetRotationConfiguration">resetRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetValidatePastExpirationDate">resetValidatePastExpirationDate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotationConfiguration` <a name="putRotationConfiguration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.putRotationConfiguration"></a>

```java
public void putRotationConfiguration(GroupServiceAccountAccessTokenRotationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.putRotationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

---

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetExpiresAt"></a>

```java
public void resetExpiresAt()
```

##### `resetRotationConfiguration` <a name="resetRotationConfiguration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetRotationConfiguration"></a>

```java
public void resetRotationConfiguration()
```

##### `resetValidatePastExpirationDate` <a name="resetValidatePastExpirationDate" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.resetValidatePastExpirationDate"></a>

```java
public void resetValidatePastExpirationDate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupServiceAccountAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessToken;

GroupServiceAccountAccessToken.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessToken;

GroupServiceAccountAccessToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessToken;

GroupServiceAccountAccessToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessToken;

GroupServiceAccountAccessToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GroupServiceAccountAccessToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GroupServiceAccountAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GroupServiceAccountAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GroupServiceAccountAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GroupServiceAccountAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.revoked">revoked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference">GroupServiceAccountAccessTokenRotationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAtInput">expiresAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfigurationInput">rotationConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDateInput">validatePastExpirationDateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDate">validatePastExpirationDate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.revoked"></a>

```java
public IResolvable getRevoked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rotationConfiguration`<sup>Required</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfiguration"></a>

```java
public GroupServiceAccountAccessTokenRotationConfigurationOutputReference getRotationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference">GroupServiceAccountAccessTokenRotationConfigurationOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAtInput"></a>

```java
public java.lang.String getExpiresAtInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rotationConfigurationInput`<sup>Optional</sup> <a name="rotationConfigurationInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.rotationConfigurationInput"></a>

```java
public IResolvable|GroupServiceAccountAccessTokenRotationConfiguration getRotationConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `validatePastExpirationDateInput`<sup>Optional</sup> <a name="validatePastExpirationDateInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDateInput"></a>

```java
public java.lang.Boolean|IResolvable getValidatePastExpirationDateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `validatePastExpirationDate`<sup>Required</sup> <a name="validatePastExpirationDate" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.validatePastExpirationDate"></a>

```java
public java.lang.Boolean|IResolvable getValidatePastExpirationDate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroupServiceAccountAccessTokenConfig <a name="GroupServiceAccountAccessTokenConfig" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessTokenConfig;

GroupServiceAccountAccessTokenConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .group(java.lang.String)
    .name(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .userId(java.lang.Number)
//  .expiresAt(java.lang.String)
//  .rotationConfiguration(GroupServiceAccountAccessTokenRotationConfiguration)
//  .validatePastExpirationDate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.group">group</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the group containing the service account. Must be a top level group. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the personal access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The scopes of the group service account access token. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a service account user. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The service account access token expiry date. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.validatePastExpirationDate">validatePastExpirationDate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Wether to validate if the expiration date is in the future. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The ID or URL-encoded path of the group containing the service account. Must be a top level group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#group GroupServiceAccountAccessToken#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#name GroupServiceAccountAccessToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The scopes of the group service account access token.

Valid values are: `api`, `read_user`, `read_api`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `read_virtual_registry`, `write_virtual_registry`, `sudo`, `admin_mode`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `self_rotate`, `read_service_ping`. If `self_rotate` is included, you must also provide either `expires_at` or `rotation_configuration`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#scopes GroupServiceAccountAccessToken#scopes}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of a service account user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#user_id GroupServiceAccountAccessToken#user_id}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

The service account access token expiry date.

When left blank, the token follows the standard rule of expiry for personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#expires_at GroupServiceAccountAccessToken#expires_at}

---

##### `rotationConfiguration`<sup>Optional</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.rotationConfiguration"></a>

```java
public GroupServiceAccountAccessTokenRotationConfiguration getRotationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#rotation_configuration GroupServiceAccountAccessToken#rotation_configuration}

---

##### `validatePastExpirationDate`<sup>Optional</sup> <a name="validatePastExpirationDate" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenConfig.property.validatePastExpirationDate"></a>

```java
public java.lang.Boolean|IResolvable getValidatePastExpirationDate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Wether to validate if the expiration date is in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#validate_past_expiration_date GroupServiceAccountAccessToken#validate_past_expiration_date}

---

### GroupServiceAccountAccessTokenRotationConfiguration <a name="GroupServiceAccountAccessTokenRotationConfiguration" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessTokenRotationConfiguration;

GroupServiceAccountAccessTokenRotationConfiguration.builder()
    .rotateBeforeDays(java.lang.Number)
//  .expirationDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.rotateBeforeDays">rotateBeforeDays</a></code> | <code>java.lang.Number</code> | The duration (in days) before the expiration when the token should be rotated. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | The duration (in days) the new token should be valid for. |

---

##### `rotateBeforeDays`<sup>Required</sup> <a name="rotateBeforeDays" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.rotateBeforeDays"></a>

```java
public java.lang.Number getRotateBeforeDays();
```

- *Type:* java.lang.Number

The duration (in days) before the expiration when the token should be rotated.

As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#rotate_before_days GroupServiceAccountAccessToken#rotate_before_days}

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

The duration (in days) the new token should be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/group_service_account_access_token#expiration_days GroupServiceAccountAccessToken#expiration_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupServiceAccountAccessTokenRotationConfigurationOutputReference <a name="GroupServiceAccountAccessTokenRotationConfigurationOutputReference" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_service_account_access_token.GroupServiceAccountAccessTokenRotationConfigurationOutputReference;

new GroupServiceAccountAccessTokenRotationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resetExpirationDays">resetExpirationDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationDays` <a name="resetExpirationDays" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.resetExpirationDays"></a>

```java
public void resetExpirationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput">expirationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput">rotateBeforeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays">rotateBeforeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput"></a>

```java
public java.lang.Number getExpirationDaysInput();
```

- *Type:* java.lang.Number

---

##### `rotateBeforeDaysInput`<sup>Optional</sup> <a name="rotateBeforeDaysInput" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput"></a>

```java
public java.lang.Number getRotateBeforeDaysInput();
```

- *Type:* java.lang.Number

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

---

##### `rotateBeforeDays`<sup>Required</sup> <a name="rotateBeforeDays" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays"></a>

```java
public java.lang.Number getRotateBeforeDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GroupServiceAccountAccessTokenRotationConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupServiceAccountAccessToken.GroupServiceAccountAccessTokenRotationConfiguration">GroupServiceAccountAccessTokenRotationConfiguration</a>

---



