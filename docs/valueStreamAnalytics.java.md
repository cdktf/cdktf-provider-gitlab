# `valueStreamAnalytics` Submodule <a name="`valueStreamAnalytics` Submodule" id="@cdktf/provider-gitlab.valueStreamAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValueStreamAnalytics <a name="ValueStreamAnalytics" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics gitlab_value_stream_analytics}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalytics;

ValueStreamAnalytics.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .stages(IResolvable|java.util.List<ValueStreamAnalyticsStages>)
//  .groupFullPath(java.lang.String)
//  .projectFullPath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.stages">stages</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>></code> | Stages of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.groupFullPath">groupFullPath</a></code> | <code>java.lang.String</code> | Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.projectFullPath">projectFullPath</a></code> | <code>java.lang.String</code> | Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.stages"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>>

Stages of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}

---

##### `groupFullPath`<sup>Optional</sup> <a name="groupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.groupFullPath"></a>

- *Type:* java.lang.String

Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}

---

##### `projectFullPath`<sup>Optional</sup> <a name="projectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.projectFullPath"></a>

- *Type:* java.lang.String

Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath">resetGroupFullPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath">resetProjectFullPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStages` <a name="putStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages"></a>

```java
public void putStages(IResolvable|java.util.List<ValueStreamAnalyticsStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>>

---

##### `resetGroupFullPath` <a name="resetGroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath"></a>

```java
public void resetGroupFullPath()
```

##### `resetProjectFullPath` <a name="resetProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath"></a>

```java
public void resetProjectFullPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalytics;

ValueStreamAnalytics.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalytics;

ValueStreamAnalytics.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalytics;

ValueStreamAnalytics.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalytics;

ValueStreamAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ValueStreamAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ValueStreamAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ValueStreamAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ValueStreamAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages">stages</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput">groupFullPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput">projectFullPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput">stagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath">groupFullPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath">projectFullPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages"></a>

```java
public ValueStreamAnalyticsStagesList getStages();
```

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a>

---

##### `groupFullPathInput`<sup>Optional</sup> <a name="groupFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput"></a>

```java
public java.lang.String getGroupFullPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectFullPathInput`<sup>Optional</sup> <a name="projectFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput"></a>

```java
public java.lang.String getProjectFullPathInput();
```

- *Type:* java.lang.String

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput"></a>

```java
public IResolvable|java.util.List<ValueStreamAnalyticsStages> getStagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>>

---

##### `groupFullPath`<sup>Required</sup> <a name="groupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath"></a>

```java
public java.lang.String getGroupFullPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectFullPath`<sup>Required</sup> <a name="projectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath"></a>

```java
public java.lang.String getProjectFullPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ValueStreamAnalyticsConfig <a name="ValueStreamAnalyticsConfig" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalyticsConfig;

ValueStreamAnalyticsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .stages(IResolvable|java.util.List<ValueStreamAnalyticsStages>)
//  .groupFullPath(java.lang.String)
//  .projectFullPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages">stages</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>></code> | Stages of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath">groupFullPath</a></code> | <code>java.lang.String</code> | Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath">projectFullPath</a></code> | <code>java.lang.String</code> | Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages"></a>

```java
public IResolvable|java.util.List<ValueStreamAnalyticsStages> getStages();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>>

Stages of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}

---

##### `groupFullPath`<sup>Optional</sup> <a name="groupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath"></a>

```java
public java.lang.String getGroupFullPath();
```

- *Type:* java.lang.String

Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}

---

##### `projectFullPath`<sup>Optional</sup> <a name="projectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath"></a>

```java
public java.lang.String getProjectFullPath();
```

- *Type:* java.lang.String

Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}

---

### ValueStreamAnalyticsStages <a name="ValueStreamAnalyticsStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalyticsStages;

ValueStreamAnalyticsStages.builder()
    .name(java.lang.String)
//  .custom(java.lang.Boolean|IResolvable)
//  .endEventIdentifier(java.lang.String)
//  .endEventLabelId(java.lang.String)
//  .hidden(java.lang.Boolean|IResolvable)
//  .startEventIdentifier(java.lang.String)
//  .startEventLabelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name">name</a></code> | <code>java.lang.String</code> | The name of the value stream stage. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom">custom</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Boolean whether the stage is customized. If false, it assigns a built-in default stage by name. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier">endEventIdentifier</a></code> | <code>java.lang.String</code> | End event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId">endEventLabelId</a></code> | <code>java.lang.String</code> | Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden">hidden</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Boolean whether the stage is hidden, GitLab provided default stages are hidden by default. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier">startEventIdentifier</a></code> | <code>java.lang.String</code> | Start event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId">startEventLabelId</a></code> | <code>java.lang.String</code> | Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the value stream stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom"></a>

```java
public java.lang.Boolean|IResolvable getCustom();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Boolean whether the stage is customized. If false, it assigns a built-in default stage by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#custom ValueStreamAnalytics#custom}

---

##### `endEventIdentifier`<sup>Optional</sup> <a name="endEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier"></a>

```java
public java.lang.String getEndEventIdentifier();
```

- *Type:* java.lang.String

End event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#end_event_identifier ValueStreamAnalytics#end_event_identifier}

---

##### `endEventLabelId`<sup>Optional</sup> <a name="endEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId"></a>

```java
public java.lang.String getEndEventLabelId();
```

- *Type:* java.lang.String

Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#end_event_label_id ValueStreamAnalytics#end_event_label_id}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden"></a>

```java
public java.lang.Boolean|IResolvable getHidden();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Boolean whether the stage is hidden, GitLab provided default stages are hidden by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#hidden ValueStreamAnalytics#hidden}

---

##### `startEventIdentifier`<sup>Optional</sup> <a name="startEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier"></a>

```java
public java.lang.String getStartEventIdentifier();
```

- *Type:* java.lang.String

Start event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#start_event_identifier ValueStreamAnalytics#start_event_identifier}

---

##### `startEventLabelId`<sup>Optional</sup> <a name="startEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId"></a>

```java
public java.lang.String getStartEventLabelId();
```

- *Type:* java.lang.String

Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/value_stream_analytics#start_event_label_id ValueStreamAnalytics#start_event_label_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ValueStreamAnalyticsStagesList <a name="ValueStreamAnalyticsStagesList" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalyticsStagesList;

new ValueStreamAnalyticsStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get"></a>

```java
public ValueStreamAnalyticsStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ValueStreamAnalyticsStages> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>>

---


### ValueStreamAnalyticsStagesOutputReference <a name="ValueStreamAnalyticsStagesOutputReference" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.value_stream_analytics.ValueStreamAnalyticsStagesOutputReference;

new ValueStreamAnalyticsStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier">resetEndEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId">resetEndEventLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier">resetStartEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId">resetStartEventLabelId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetEndEventIdentifier` <a name="resetEndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier"></a>

```java
public void resetEndEventIdentifier()
```

##### `resetEndEventLabelId` <a name="resetEndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId"></a>

```java
public void resetEndEventLabelId()
```

##### `resetHidden` <a name="resetHidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden"></a>

```java
public void resetHidden()
```

##### `resetStartEventIdentifier` <a name="resetStartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier"></a>

```java
public void resetStartEventIdentifier()
```

##### `resetStartEventLabelId` <a name="resetStartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId"></a>

```java
public void resetStartEventLabelId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput">customInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput">endEventIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput">endEventLabelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput">hiddenInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput">startEventIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput">startEventLabelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom">custom</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier">endEventIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId">endEventLabelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden">hidden</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier">startEventIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId">startEventLabelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput"></a>

```java
public java.lang.Boolean|IResolvable getCustomInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endEventIdentifierInput`<sup>Optional</sup> <a name="endEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput"></a>

```java
public java.lang.String getEndEventIdentifierInput();
```

- *Type:* java.lang.String

---

##### `endEventLabelIdInput`<sup>Optional</sup> <a name="endEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput"></a>

```java
public java.lang.String getEndEventLabelIdInput();
```

- *Type:* java.lang.String

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput"></a>

```java
public java.lang.Boolean|IResolvable getHiddenInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `startEventIdentifierInput`<sup>Optional</sup> <a name="startEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput"></a>

```java
public java.lang.String getStartEventIdentifierInput();
```

- *Type:* java.lang.String

---

##### `startEventLabelIdInput`<sup>Optional</sup> <a name="startEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput"></a>

```java
public java.lang.String getStartEventLabelIdInput();
```

- *Type:* java.lang.String

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom"></a>

```java
public java.lang.Boolean|IResolvable getCustom();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endEventIdentifier`<sup>Required</sup> <a name="endEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier"></a>

```java
public java.lang.String getEndEventIdentifier();
```

- *Type:* java.lang.String

---

##### `endEventLabelId`<sup>Required</sup> <a name="endEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId"></a>

```java
public java.lang.String getEndEventLabelId();
```

- *Type:* java.lang.String

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden"></a>

```java
public java.lang.Boolean|IResolvable getHidden();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startEventIdentifier`<sup>Required</sup> <a name="startEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier"></a>

```java
public java.lang.String getStartEventIdentifier();
```

- *Type:* java.lang.String

---

##### `startEventLabelId`<sup>Required</sup> <a name="startEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId"></a>

```java
public java.lang.String getStartEventLabelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue"></a>

```java
public IResolvable|ValueStreamAnalyticsStages getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>

---



