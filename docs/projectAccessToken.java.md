# `projectAccessToken` Submodule <a name="`projectAccessToken` Submodule" id="@cdktf/provider-gitlab.projectAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectAccessToken <a name="ProjectAccessToken" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token gitlab_project_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessToken;

ProjectAccessToken.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .project(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
//  .accessLevel(java.lang.String)
//  .expiresAt(java.lang.String)
//  .rotationConfiguration(ProjectAccessTokenRotationConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The scopes of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access level for the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the project access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#name ProjectAccessToken#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#project ProjectAccessToken#project}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

The scopes of the project access token.

valid values are: `api`, `read_api`, `read_registry`, `write_registry`, `read_repository`, `write_repository`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `read_observability`, `write_observability`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#scopes ProjectAccessToken#scopes}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

The access level for the project access token.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`. Default is `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#access_level ProjectAccessToken#access_level}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.expiresAt"></a>

- *Type:* java.lang.String

When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#expires_at ProjectAccessToken#expires_at}

---

##### `rotationConfiguration`<sup>Optional</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.rotationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#rotation_configuration ProjectAccessToken#rotation_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration">putRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetRotationConfiguration">resetRotationConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotationConfiguration` <a name="putRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration"></a>

```java
public void putRotationConfiguration(ProjectAccessTokenRotationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetExpiresAt"></a>

```java
public void resetExpiresAt()
```

##### `resetRotationConfiguration` <a name="resetRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetRotationConfiguration"></a>

```java
public void resetRotationConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessToken;

ProjectAccessToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessToken;

ProjectAccessToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessToken;

ProjectAccessToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessToken;

ProjectAccessToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectAccessToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.revoked">revoked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference">ProjectAccessTokenRotationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAtInput">expiresAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfigurationInput">rotationConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.revoked"></a>

```java
public IResolvable getRevoked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rotationConfiguration`<sup>Required</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfiguration"></a>

```java
public ProjectAccessTokenRotationConfigurationOutputReference getRotationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference">ProjectAccessTokenRotationConfigurationOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAtInput"></a>

```java
public java.lang.String getExpiresAtInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rotationConfigurationInput`<sup>Optional</sup> <a name="rotationConfigurationInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfigurationInput"></a>

```java
public java.lang.Object getRotationConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectAccessTokenConfig <a name="ProjectAccessTokenConfig" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessTokenConfig;

ProjectAccessTokenConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .project(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
//  .accessLevel(java.lang.String)
//  .expiresAt(java.lang.String)
//  .rotationConfiguration(ProjectAccessTokenRotationConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The scopes of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access level for the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the project access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#name ProjectAccessToken#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#project ProjectAccessToken#project}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The scopes of the project access token.

valid values are: `api`, `read_api`, `read_registry`, `write_registry`, `read_repository`, `write_repository`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `read_observability`, `write_observability`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#scopes ProjectAccessToken#scopes}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

The access level for the project access token.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`. Default is `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#access_level ProjectAccessToken#access_level}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#expires_at ProjectAccessToken#expires_at}

---

##### `rotationConfiguration`<sup>Optional</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.rotationConfiguration"></a>

```java
public ProjectAccessTokenRotationConfiguration getRotationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#rotation_configuration ProjectAccessToken#rotation_configuration}

---

### ProjectAccessTokenRotationConfiguration <a name="ProjectAccessTokenRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessTokenRotationConfiguration;

ProjectAccessTokenRotationConfiguration.builder()
    .expirationDays(java.lang.Number)
    .rotateBeforeDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | The duration (in days) the new token should be valid for. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.rotateBeforeDays">rotateBeforeDays</a></code> | <code>java.lang.Number</code> | The duration (in days) before the expiration when the token should be rotated. |

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

The duration (in days) the new token should be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#expiration_days ProjectAccessToken#expiration_days}

---

##### `rotateBeforeDays`<sup>Required</sup> <a name="rotateBeforeDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.rotateBeforeDays"></a>

```java
public java.lang.Number getRotateBeforeDays();
```

- *Type:* java.lang.Number

The duration (in days) before the expiration when the token should be rotated.

As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_access_token#rotate_before_days ProjectAccessToken#rotate_before_days}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectAccessTokenRotationConfigurationOutputReference <a name="ProjectAccessTokenRotationConfigurationOutputReference" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_access_token.ProjectAccessTokenRotationConfigurationOutputReference;

new ProjectAccessTokenRotationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput">expirationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput">rotateBeforeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays">rotateBeforeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput"></a>

```java
public java.lang.Number getExpirationDaysInput();
```

- *Type:* java.lang.Number

---

##### `rotateBeforeDaysInput`<sup>Optional</sup> <a name="rotateBeforeDaysInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput"></a>

```java
public java.lang.Number getRotateBeforeDaysInput();
```

- *Type:* java.lang.Number

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

---

##### `rotateBeforeDays`<sup>Required</sup> <a name="rotateBeforeDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays"></a>

```java
public java.lang.Number getRotateBeforeDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

---



